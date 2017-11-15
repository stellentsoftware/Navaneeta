import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Colors, Images } from '../Themes';
import Styles from './Styles/HomeopathyStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import CustomNavBar from './../Components/CustomNavBar';
import AddPatients from './../Components/AddPatients';
import Patients from './../Components/Patients';
import { Button, Text as NBText, Contant, Content, Header, Form, Item, Container, Input, Label, Footer, FooterTab, Card, CardItem, Body } from 'native-base';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Homeopathy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageView: 'addPatients'
    };
  }
  addPatientsFunc() {
    this.setState({
      pageView: 'addPatients'
    });
  }
  patientsFunc() {
    this.setState({
      pageView: 'patients'
    });
  }

  render() {
    return (
      <Container>
        <View style={Styles.headerContainer}>
          <CustomNavBar title="Homeopathy" />
        </View>
        <View style={Styles.contentView}>
          <View style={Styles.mainContainer}>
            <View style={Styles.profileView}>
              <View style={Styles.imageView}>
                <View style={Styles.imageBorderView} />
              </View>
              <View style={Styles.profileDescriptionView}>
                <View style={Styles.profileNameView}>
                  <Text style={Styles.nameText}>Doctor Name</Text>
                </View>
                <View style={Styles.decriptionView}>
                  <Text style={Styles.descriptionText}>BHMS MD - Homeopathy {'\n'} Master of Hospital Administration</Text>
                </View>

                <View style={Styles.mainButtonView}>
                  <TouchableOpacity onPress={this.addPatientsFunc.bind(this)}>
                    {this.state.pageView == 'addPatients' ? (
                      <View style={Styles.buttonFocusView}>
                        <Text style={Styles.buttonFocusText}>Add Patient</Text>
                      </View>
                    ) : (
                      <View style={[Styles.buttonFocusView, { backgroundColor: 'white' }]}>
                        <Text style={[Styles.buttonFocusText, { color: 'black' }]}>Add Patient</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={Styles.mainButtonView}>
                  <TouchableOpacity onPress={this.patientsFunc.bind(this)}>
                    {this.state.pageView == 'patients' ? (
                      <View style={Styles.buttonFocusView}>
                        <Text style={Styles.buttonFocusText}>Patients</Text>
                      </View>
                    ) : (
                      <View style={[Styles.buttonFocusView, { backgroundColor: 'white' }]}>
                        <Text style={[Styles.buttonFocusText, { color: 'black' }]}>Patients</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={Styles.profileEmptyView} />
              </View>
            </View>
            <View style={Styles.contentSubView}>
              {this.state.pageView == 'addPatients' ? (
                <View style={Styles.componentView}>
                  <AddPatients patientsFunc={this.patientsFunc.bind(this)} />
                </View>
              ) : (
                <View style={Styles.componentView}>
                  <Patients />
                </View>
              )}
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default Homeopathy;
