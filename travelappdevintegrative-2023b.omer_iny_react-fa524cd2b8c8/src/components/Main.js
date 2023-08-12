import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createNewObject ,updateUserRole} from '../api/axiosConfig';
import Cookies from 'js-cookie';
import airportsData from '../airports.json';


function Main() {
  const [value, setValue] = useState({ min: 0, max: 5000 });
  const [redirectToSelect, setRedirectToSelect] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [fromWhereValue, setFromWhereValue] = useState('');
  const [airportsList, setAirportList] = useState([]);
  const [whereToValue, setWhereToValue] = useState('');
  const [selectedFromWhereAirport, setSelectedFromWhereAirport] = useState(null);
  const [selectedWhereToAirport, setSelectedWhereToAirport] = useState(null);
  const [selectedDestinationCity, setSelectedDestinationCity] = useState('');

  const handleChange = (value) => {
    setValue(value);
  };


  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  useEffect(() => {
    setAirportList(airportsData);
  }, []);  

  const filteredFromWhereAirports = airportsList.filter((airport) => {
    if (typeof fromWhereValue === 'string' && typeof airport.iata_code === 'string') {
      const searchValue = fromWhereValue.toLowerCase();
      return (
        airport.name.toLowerCase().includes(searchValue) ||
        airport.city.toLowerCase().includes(searchValue) ||
        airport.country.toLowerCase().includes(searchValue)
      );
    }
    return false;
  });
  
  const filteredWhereToAirports = airportsList.filter((airport) => {
    if (typeof whereToValue === 'string' && typeof airport.iata_code === 'string') {
      const searchValue = whereToValue.toLowerCase();
      return (
        airport.name.toLowerCase().includes(searchValue) ||
        airport.city.toLowerCase().includes(searchValue) ||
        airport.country.toLowerCase().includes(searchValue)
      );
    }
    return false;
  });
  
  

  const handleFromWhereSelection = (airport) => {
    setFromWhereValue(airport.iata_code);
    setSelectedFromWhereAirport(airport.iata_code);
  };
  
  const handleWhereToSelection = (airport) => {
    setWhereToValue(airport.iata_code);
    setSelectedWhereToAirport(airport.iata_code);
    setSelectedDestinationCity(airport.city);
  };
  

  const handleButtonClick = async () => {
    try {
      const email = Cookies.get('email');
      const username = Cookies.get('username');
      const avatar = Cookies.get('avatar');
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Avatar:', avatar);
      
  
      if (!email || email.trim() === '') {
        console.log('Please login first');
        alert('Please login first');
        return;
      }
      let userData = {
        "email": email,
        "role": "SUPERAPP_USER",
        "username": username,
        "avatar": avatar
      };
      await updateUserRole('2023b.TravelGenuis', email, userData);
      console.log('User role updated successfully');
      
        console.log('Creating new object');
        Cookies.remove('superAppObjectIdInternalId');
        const formattedDepartureDate = departureDate ? departureDate.toISOString().split('T')[0] : null;
        const formattedReturnDate = returnDate ? returnDate.toISOString().split('T')[0] : null;
        let newObject = {
          objectId: {
            superapp: '2023b.TravelGenuis',
            internalObjectId: "",
          },
          type: "coco",
          alias: "demo instance",
          active: true,
          creationTimestamp: new Date().toISOString(),
          location: {
            lat: 32.1133,
            lng: 34.818,
          },
          createdBy: {
            userId: {
              superapp: '2023b.TravelGenuis',
              email: email,
            },
          },
          objectDetails: {
            minValue: value.min,
            maxValue: value.max,
            departureDate: formattedDepartureDate,
            returnDate: formattedReturnDate,
            fromWhere: selectedFromWhereAirport,
            whereTo: selectedWhereToAirport,
            destenationCity: selectedDestinationCity,
          }
        };
  
        console.log('New object is:', newObject);
        newObject = await createNewObject(newObject);
        console.log('New object created:', newObject);
  
        userData = {
          "email": email,
          "role": "MINIAPP_USER",
          "username": username,
          "avatar": avatar
        };
        await updateUserRole('2023b.TravelGenuis', email, userData);
        console.log('User role updated successfully');
      
  
      Cookies.set('superAppObject', JSON.stringify(newObject));
      Cookies.set('superAppObjectIdInternalId', newObject.objectId.internalObjectId);
      console.log('Object stored in cookies');
      setRedirectToSelect(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <Navbar />

      <div>
        <h3 style={{ textAlign: 'center', fontSize: '40px', color: 'var(--clr-grey-1)', paddingTop: '40px' }}>
          Welcome to TravelGenius
        </h3>
        <h3 style={{ textAlign: 'center', fontSize: '15px', color: 'var(--clr-grey-1)' }}>
          Affordable travel, unforgettable memories
        </h3>
        <h3 style={{ textAlign: 'center', fontSize: '30px', color: 'var(--clr-grey-1)', paddingTop: '50px' }}>
          Choose your budget
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <div style={{ width: '40%', marginLeft: 'calc(30px - 0.5em)' }}>
            <InputRange maxValue={5000} minValue={0} value={value} onChange={handleChange} />
          </div>
        </div>

        <h3 style={{ paddingTop: '10px', textAlign: 'center', color: 'var(--clr-grey-1)', fontSize: '15px' }}>
          Selected range: {value.min}$ - {value.max}$
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
          <div style={{ marginRight: '10px' }}>
            <h3 style={{ textAlign: 'center', fontSize: '15px' }}>From where?</h3>
            <input
              type="text"
              id="fromWhere"
              name="fromWhere"
              placeholder="From where?"
              value={fromWhereValue}
              onChange={(event) => setFromWhereValue(event.target.value)}
              style={{
                border: '1px solid gray',
                borderRadius: '2px',
                padding: '5px',
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundImage: 'none',
                paddingLeft: '5px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                width: '200px',
                marginRight: '10px',
                height: '25px',
                backgroundSize: 'auto 100%',
              }}
            />
            {fromWhereValue && !selectedFromWhereAirport && (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredFromWhereAirports.map((airport) => (
                  <li key={airport.objectID} onClick={() => handleFromWhereSelection(airport)}>
                    {`${airport.name} (${airport.iata_code})`}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '15px' }}>Where to?</h3>
            <input
              type="text"
              id="whereTo"
              name="whereTo"
              placeholder="Where to?"
              value={whereToValue}
              onChange={(event) => setWhereToValue(event.target.value)}
              style={{
                border: '1px solid gray',
                borderRadius: '2px',
                padding: '5px',
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundImage: 'none',
                paddingLeft: '5px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                width: '200px',
                height: '25px',
                backgroundSize: 'auto 100%',
              }}
            />
            {whereToValue && !selectedWhereToAirport && (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredWhereToAirports.map((airport) => (
                  <li key={airport.objectID} onClick={() => handleWhereToSelection(airport)}>
                    {`${airport.name} (${airport.iata_code})`}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
          <div style={{ marginRight: '20px' }}>
            <h3 style={{ textAlign: 'center', fontSize: '15px'}}>Departure date:</h3>
            <DatePicker selected={departureDate} onChange={handleDepartureDateChange} />
          </div>
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '15px'}}>Return date:</h3>
            <DatePicker selected={returnDate} onChange={handleReturnDateChange} />
          </div>
        </div>

        {!redirectToSelect && (
          <h3 style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <Link
              to="/select"
              style={{
                textDecoration: 'none',
                fontSize: '18px',
                padding: '10px 20px',
                color: 'var(--clr-grey-1)',
                backgroundColor: 'whitesmoke',
                border: '1px solid var(--clr-grey-1)',
                borderRadius: '5px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onClick={handleButtonClick}
            >
              Let's Start
            </Link>
          </h3>
        )}
        {redirectToSelect && <Redirect to="/select" />}
      </div>
    </div>
  );
}

export default Main;