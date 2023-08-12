import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { invokeCommand ,convertToUSD} from '../api/axiosConfig';
import LoadingComponent from './LoadingComponent';
import { Card, CardContent, CardMedia, Button, Grid } from '@material-ui/core';


const Hotels = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const superAppObjectIdInternalId = Cookies.get('superAppObjectIdInternalId');
  const email = Cookies.get('email');
  
  

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const data = localStorage.getItem('hotelData');
      if (data) {
        try {
          console.log(data);
          const parsedData = JSON.parse(data);
          const processedData = await Promise.all(parsedData.result.map(async hotel => {
            const priceUSD = await convertToUSD(hotel.composite_price_breakdown.gross_amount.value, hotel.composite_price_breakdown.gross_amount.currency);
            return { ...hotel, priceUSD }; 
          }));
          setHotelsData(processedData);
          setIsLoading(false);
        } catch (err) {
          console.error("Error parsing data: ", err);
        }
      } else {
        console.warn("No data found in LocalStorage");
      }
    }, 500);
  }, []);

  const handleAddToBudgetPlanner = (hotelUrl, totalPriceInUSD) => {
    const miniAppCommandBoundary = {
      commandId: {
        superapp: '2023b.TravelGenuis',
        miniapp: 'budget',
        internalCommandId: ''
      },
      command: 'addhotel',
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
        hotelPrice: totalPriceInUSD,
        hotelPurchaseLink: hotelUrl
      }
    };
    console.log(invokeCommand(miniAppCommandBoundary,'budget'));
    console.log("Hotel added to budget planner:", totalPriceInUSD, hotelUrl);
  };

  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ textAlign: 'center', paddingTop: '50px' }}>Hotels for your budget:</h3>
        <Link to="/select">
          <Button variant="contained" color="secondary" style={{marginBottom: '20px'}}>Return</Button>
        </Link>
        {hotelsData.map((hotel, index) => (
          <Card key={index} style={{ 
              width: '80%',
              margin: '1rem auto', 
              padding: '20px', 
              boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  alt={hotel.hotel_name_trans}
                  height="500"
                  image={hotel.max_photo_url}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent>
                  <h4>{hotel.hotel_name_trans}</h4>
                  <p>Address: {hotel.address_trans}</p>
                  <p>City: {hotel.city}</p>
                  <p>Country: {hotel.country_trans}</p>
                  <p>Distance to city center: {hotel.distance_to_cc} km</p>
                  <p>Review score: {hotel.review_score}</p>
                  <p>Check-in from: {hotel.checkin.from}</p>
                  <p>Check-out until: {hotel.checkout.until}</p>
                  <div style={{ paddingTop: '10px' }}>
                    <p>Price: {hotel.composite_price_breakdown.gross_amount.value} {hotel.composite_price_breakdown.gross_amount.currency} ({hotel.priceUSD} USD)</p>
                    <Button variant="contained" color="primary" onClick={() => handleAddToBudgetPlanner(hotel.url,hotel.priceUSD)}>Add to budget planner</Button>
                    <Button variant="contained" color="secondary" style={{marginLeft: '10px'}} onClick={() => window.open(hotel.url, "_blank")}>Book this Hotel</Button>
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    );
  }
};

export default Hotels;
