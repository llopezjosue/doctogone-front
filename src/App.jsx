import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserHome from './components/User/UserHome';
import MyInfos from './components/User/MyInfos';
import MyPlanning from './components/User/MyPlanning';
import MyRelatives from './components/User/MyRelatives';
import SOS from './components/User/SOS';
import CaregiverHome from './components/Caregiver/CaregiverHome';
import './App.css';
import Nav from './components/Elements/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/caregiver" exact component={CaregiverHome} />
        <Route path="/user" exact component={UserHome} />
        <Route path="/user/sos" exact component={SOS} />
        <Route path="/user/my-infos" exact component={MyInfos} />
        <Route path="/user/my-planning" exact component={MyPlanning} />
        <Route path="/user/my-relatives" exact component={MyRelatives} />
      </Switch>
    </Router>
  );
}

export default App;
