import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import { Card, Button } from '@material-ui/core';

const BudgetHandler = () => {
  const [budgetData, setBudgetData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const data = localStorage.getItem('budgetData');
        if (data) {
          try {
            const parsedData = JSON.parse(data);
            setBudgetData(parsedData);
          } catch (err) {
            console.error("Error parsing data: ", err);
          }
        } else {
          console.warn("No data found in LocalStorage");
        }
      }, 200);
    };

    fetchData();
  }, []);

  const handleReturn = () => {
    history.push('/select'); // adjust this as necessary
  };


  if (!budgetData) {
    return <LoadingComponent />;
  }

  const {
    email,
    from,
    destination,
    departureDate,
    returnDate,
    hotelPrice,
    hotelPurchaseLink,
    flightPrice,
    flightPurchaseLink,
    minBudget,
    maxBudget,
    totalPrice,
    status,
  } = budgetData;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card style={{ 
          width: '80%',
          margin: '2rem auto', 
          padding: '20px', 
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
        }}
      >
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Your Trip Details:</h3>
        <div style={{ marginTop: '20px', paddingTop: '10px' }}>
          <p>Email: {email}</p>
          <p>From: {from}</p>
          <p>Destination: {destination}</p>
          <p>Departure Date: {departureDate}</p>
          <p>Return Date: {returnDate}</p>
        </div>
      </Card>
      <Card style={{ 
          width: '80%',
          margin: '2rem auto', 
          padding: '20px', 
          boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
        }}
      >
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Your Budget Details:</h3>
        <div style={{ marginTop: '20px', paddingTop: '10px' }}>
          <p>Hotel Price: ${hotelPrice}</p>
          <Button variant="contained" color="primary" onClick={() => window.open(hotelPurchaseLink, "_blank")}>Purchase Hotel</Button>
          <p>Flight Price: ${flightPrice}</p>
          <Button variant="contained" color="primary" onClick={() => window.open(flightPurchaseLink, "_blank")}>Purchase Flight</Button>
          <p>Min Budget: ${minBudget}</p>
          <p>Max Budget: ${maxBudget}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Status: {status}</p>
        </div>
      </Card>
      <Button variant="contained" color="secondary" onClick={handleReturn} style={{marginTop: '20px'}}>Return</Button>
    </div>
  );
  
};

export default BudgetHandler;
