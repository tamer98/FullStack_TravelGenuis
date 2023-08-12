import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { invokeCommand} from '../api/axiosConfig';
import LoadingComponent from './LoadingComponent';
import { Card, Button } from '@material-ui/core';

const Flights = () => {
  const [flightsData, setFlightsData] = useState([]);
  const superAppObjectIdInternalId = Cookies.get('superAppObjectIdInternalId');
  const email = Cookies.get('email');

  useEffect(() => {
    setTimeout(() => {
      const data = localStorage.getItem('flightsData');
      if (data) {
        try {
          const parsedData = JSON.parse(data);
          setFlightsData(parsedData.data.flights);
        } catch (err) {
          console.error("Error parsing data: ", err);
        }
      } else {
        console.warn("No data found in LocalStorage");
      }
    }, 500);
  }, []);

  const handleAddToBudgetPlanner = (purchaseLink,totalPrice) => {
    const miniAppCommandBoundary = {
      commandId: {
        superapp: '2023b.TravelGenuis',
        miniapp: 'budget',
        internalCommandId: ''
      },
      command: 'addflight',
      targetObject: {
        objectId: {
          superapp: '2023b.TravelGenuis',
          internalObjectId: superAppObjectIdInternalId,
        }
      },
      invocationTimestamp: new Date(),
      invokedBy: {
        userId: {
          superapp: '2023b.TravelGenuis',
          email: email,
        }
      },
      commandAttributes: {
        flightPrice : totalPrice,
        flightPurchaseLink : purchaseLink
      }
    };
    invokeCommand(miniAppCommandBoundary,'budget');
    console.log("Flight added to budget planner:",totalPrice ,purchaseLink);
  };

  if (!flightsData || flightsData.length === 0) {
    return <LoadingComponent />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ textAlign: 'center', paddingTop: '50px' }}>Flights for your budget:</h3>
      <Link to="/select">
        <Button variant="contained" color="secondary" style={{marginBottom: '20px'}}>Return</Button>
      </Link>
      {flightsData.map((flight, index) => (
        <Card key={index} style={{ 
            width: '80%',
            margin: '1rem auto', 
            padding: '20px', 
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
          }}
        >
          {flight.segments.map((segment, segIndex) => (
            <div key={segIndex}>
              {segment.legs.map((leg, legIndex) => (
                <div key={legIndex}>
                  <p>From: {leg.originStationCode} - To: {leg.destinationStationCode}</p>
                  <p>Departure: {leg.departureDateTime}</p>
                  <p>Arrival: {leg.arrivalDateTime}</p>
                  <p>Carrier: {leg.operatingCarrier.displayName}</p>
                </div>
              ))}
            </div>
          ))}
          {flight.purchaseLinks.length > 0 && (
            <div style={{ marginTop: '20px', paddingTop: '10px' }}>
              <p>Price: {flight.purchaseLinks[0].totalPrice} {flight.purchaseLinks[0].currency}</p>
              <Button variant="contained" color="primary" onClick={() => handleAddToBudgetPlanner(flight.purchaseLinks[0].url,flight.purchaseLinks[0].totalPrice)}>Add to budget planner</Button>
              <Button variant="contained" color="secondary" style={{marginLeft: '10px'}} onClick={() => window.open(flight.purchaseLinks[0].url, "_blank")}>Purchase</Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Flights;
