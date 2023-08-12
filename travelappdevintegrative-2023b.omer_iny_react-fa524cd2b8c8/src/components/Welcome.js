import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import airplane from '../images/airplane.png';
import LoginForm from './LoginForm';
import Main from './Main';
import Select from './Select';
import SignUpForm from './SignUpForm';
import Flights from './Flights';
import Hotels from './Hotels';
import BudgetHandler from './BudgetHandler';

function Welcome () {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end', // Align to the bottom
        alignItems: 'center',
        height: '100hv',
        backgroundColor: 'whitesmoke',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '80px', marginTop:'70px' }}>
        <h3 style={{ color: 'var(--clr-grey-5)', marginRight: '10px', fontSize:'50px' }}>
          TravelGenius
        </h3>
        <img src={airplane} height={40} width={40} alt="Example" />
      </div>

      <div>
        <h3 style ={{color:'black',fontSize: '20px',marginBottom:'50px', fontFamily:'serif', marginLeft:'80px' }}>       
          Discover amazing travel experiences that fit your budget -  
        </h3>
        <h3 style ={{color:'black',fontSize: '20px',marginBottom:'50px', marginLeft:'10px', fontFamily:'serif' }}>       
          find your ideal travel experiences with our innovative tourism platform
        </h3>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Link to="/login">
          <button
            style={{
              marginRight: '10px',
              padding: '10px 20px',
              backgroundColor: 'var(--clr-primary-9)',
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            type="button"
          >
            Log In
          </button>
        </Link>
        <Link to="/SignUp">
          <button
            style={{
              marginRight: '10px',
              padding: '10px 20px',
              backgroundColor: 'var(--clr-primary-9)',
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            type="button"
          >
            Sign Up
          </button>
        </Link>
      </div>

      {/* Other content */}
    </div>
  );
};

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/SignUp" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/search" component={Main} />
        <Route path="/select" component={Select} />
        <Route path="/flights" component={Flights} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/budget" component={BudgetHandler} />
      </Switch>
    </Router>
  );
};

export default App;
