import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import UserHome from "./components/User/UserHome";
import MyInfos from "./components/User/MyInfos";
import MyPlanning from "./components/User/MyPlanning";
import MyRelatives from "./components/User/MyRelatives";
import SOS from "./components/User/SOS";
import CaregiverHome from "./components/Caregiver/CaregiverHome";
import HisInfos from "./components/Caregiver/HisInfos";
import HisPlanning from "./components/Caregiver/HisPlanning";
import HisStats from "./components/Caregiver/HisStats";
import SendPhotos from "./components/Caregiver/SendPhotos";
import Nav from "./components/Elements/Nav";
import Alert from "./components/Elements/Alert";
import "./App.css";

function App() {
  return (
    <div>
      <Alert />

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/login2" exact component={Login2} />
          <Route path="/caregiver" exact component={CaregiverHome} />
          <Route path="/caregiver/his-infos" exact component={HisInfos} />
          <Route path="/caregiver/his-planning" exact component={HisPlanning} />
          <Route path="/caregiver/his-stats" exact component={HisStats} />
          <Route path="/caregiver/send-photos" exact component={SendPhotos} />
          <Route path="/user" exact component={UserHome} />
          <Route path="/user/sos" exact component={SOS} />
          <Route path="/user/my-infos" exact component={MyInfos} />
          <Route path="/user/my-planning" exact component={MyPlanning} />
          <Route path="/user/my-relatives" exact component={MyRelatives} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
