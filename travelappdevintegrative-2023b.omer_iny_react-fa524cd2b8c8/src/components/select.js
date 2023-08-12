import React,{ useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {updateUserRole,invokeCommand} from '../api/axiosConfig';
import flightButtonImage from '../images/flightButton.png';
import hotelButtonImage from '../images/HotelButton.png';
import budgetButtonImage from '../images/ButgetPlanner.png';
import Cookies from 'js-cookie';
import LoadingComponent from './LoadingComponent';


function Select() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const invokeHotelsByLocation = async () => {
    const email = Cookies.get('email');
    const superAppObjectIdInternalId = Cookies.get('superAppObjectIdInternalId');
    
    const miniAppCommandBoundary = {
      commandId: {
        superapp: '2023b.TravelGenuis',
        miniapp: 'hotels',
        internalCommandId: ''
      },
      command: 'searchhotelbylocation',
      targetObject: {
        objectId: {
          superapp: '2023b.TravelGenuis',
          internalObjectId: superAppObjectIdInternalId
        }
      },
      invocationTimestamp: new Date(),
      invokedBy: {
        userId: {
          superapp: '2023b.TravelGenuis',
          email: email
        }
      },
      commandAttributes: {
        // Set the necessary command attributes for the searchhotelsbylocation command
        // based on your requirements
      }
    };
  
    // Invoke the command
    console.log(miniAppCommandBoundary);
    localStorage.removeItem('hotelData');
    const result = await invokeCommand(miniAppCommandBoundary,'hotels');
    console.log(result);
    localStorage.setItem('hotelData', JSON.stringify(result));
    
  };

  
  const invokeFlightsRoundTrip = async () => {
    const email = Cookies.get('email');
    const superAppObjectIdInternalId = Cookies.get('superAppObjectIdInternalId');
    
  
    const miniAppCommandBoundary = {
      commandId: {
        superapp: '2023b.TravelGenuis',
        miniapp: 'flights',
        internalCommandId: ''
      },
      command: 'searchflightsroundtrip',
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
        // Set the necessary command attributes for the searchflightsroundtrip command
        // based on your requirements
      }
    };
  
    // Invoke the command
    console.log(miniAppCommandBoundary);
    const result = await invokeCommand(miniAppCommandBoundary,'flights');
    localStorage.removeItem('flightsData');
    localStorage.setItem('flightsData', JSON.stringify(result));
    
  };
  



  const invokeBudgetPlanner = async () => {
    const email = Cookies.get('email');
    const superAppObjectIdInternalId = Cookies.get('superAppObjectIdInternalId');
    
    const miniAppCommandBoundary = {
      commandId: {
        superapp: '2023b.TravelGenuis',
        miniapp: 'budget',
        internalCommandId: ''
      },
      command: 'getbudgetplanner',
      targetObject: {
        objectId: {
          superapp: '2023b.TravelGenuis',
          internalObjectId: superAppObjectIdInternalId
        },
      },
      invocationTimestamp: new Date(),
      invokedBy: {
        userId: {
          superapp: '2023b.TravelGenuis',
          email: email
        },
      },
      commandAttributes: {
        // Set the necessary command attributes for the getbudgetplanner command
        // based on your requirements
      },
    };
  
    // Invoke the command
    console.log(miniAppCommandBoundary);
    const result = await invokeCommand(miniAppCommandBoundary,'budget');
    localStorage.removeItem('budgetData');
    console.log('stingify to json result\n'+JSON.stringify(result));
    localStorage.setItem('budgetData', JSON.stringify(result));
    
  };
  
  const fetchFlightsAndNavigate = async () => {
    setLoading(true);
    await invokeFlightsRoundTrip();
    setLoading(false);
    history.push("/flights");
  };

  const fetchHotelsAndNavigate = async () => {
    setLoading(true);
    await invokeHotelsByLocation();
    setLoading(false);
    history.push("/hotels");
  };

  const fetchBudgetAndNavigate = async () => {
    setLoading(true);
    await invokeBudgetPlanner();
    setLoading(false);
    history.push("/budget");
  };


  const handleReturn = async () => {
    const email = Cookies.get('email');
    const username = Cookies.get('username');
    const avatar = Cookies.get('avatar');
    const userData = {
      "email": email,
      "role": "SUPERAPP_USER",
      "username": username,
      "avatar": avatar
    };
    await updateUserRole('2023b.TravelGenuis', email, userData);
    history.push('/search');
  };
  if (loading) {
    return <LoadingComponent />;
  }



  else return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        <img
          src={flightButtonImage}
          alt="Flight Button"
          style={{ width: '200px', height: '200px', marginRight: '50px', cursor: 'pointer' }}
          onClick={fetchFlightsAndNavigate}
        />
        <img
          src={hotelButtonImage}
          alt="Hotel Button"
          style={{ width: '200px', height: '200px', marginRight: '50px', cursor: 'pointer' }}
          onClick={fetchHotelsAndNavigate}
        />
        <img
          src={budgetButtonImage}
          alt="Budget Button"
          style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          onClick={fetchBudgetAndNavigate}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
        <button
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            padding: '10px 20px',
            color: 'var(--clr-grey-1)',
            backgroundColor: 'whitesmoke',
            fontWeight: 'bold',
            border: '1px solid var(--clr-grey-1)',
            borderRadius: '5px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );  
}

export default Select;
