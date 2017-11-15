import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../Containers/LoginScreen';
import Homeopathy from '../Containers/Homeopathy';
import Profile from '../Containers/Profile';
import PrescriptionList from '../Components/PrescriptionList';
/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

class NavigationRouter extends Component {
  constructor(props) {
    super(props);

    this.unsubscribe = null;
    this.state = {
      user: false,
      loading: true
    };
  }

  render() {
    return (
      <Router>
        <Scene>
          <Scene initial={Login} key="Login" component={Login} hideNavBar={true} />
          <Scene key="Homeopathy" component={Homeopathy} hideNavBar={true} />
          <Scene key="Profile" component={Profile} hideNavBar={true} />
          <Scene key="PrescriptionList" component={PrescriptionList} hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
