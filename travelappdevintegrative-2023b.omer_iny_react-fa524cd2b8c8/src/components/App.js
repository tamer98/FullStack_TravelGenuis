import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import Main from './Main';
import Select from './Select';
import SignUpForm from './SignUpForm';
import Flights from './Flights';
import Hotels from './Hotels';
import Main from './Main';
import BudgetHandler from './BudgetHandler';

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