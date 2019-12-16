import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Alert from './component/layout/Alert';
import Dashboard from './component/dashboard/Dashboard';
import PrivetRout from './component/routing/PrivetRout';
import CreateProfile from './component/profileForm/CreatePrfile';


const App = () => {
return(
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Alert />
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivetRout exact path='/dashboard' component={Dashboard} />
        <Route exact path='/create-profile' component={CreateProfile}/>
      </Switch>
    </Fragment>
  </Router>
);
}

export default App;
