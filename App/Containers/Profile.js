import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Colors, Images } from '../Themes';
import Styles from './Styles/ProfileStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import CustomNavBar from './../Components/CustomNavBar';
import AddPatients from './../Components/AddPatients';
import Patients from './../Components/Patients';
import PrescriptionList from './../Components/PrescriptionList';
import AddPrescription from './../Components/AddPrescription';
import { Button, Text as NBText, Contant, Content, Header, Form, Item, Container, Input, Label, Footer, FooterTab, Card, CardItem, Body } from 'native-base';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageView: 'personalInFo',
      changePageView: false,
      patientsList: this.props.patientsList
    };
  }
  personalInFoFunc() {
    this.setState({
      pageView: 'personalInFo'
    });
  }
  prescriptionFunc() {
    this.setState({
      pageView: 'prescription'
    });
  }
  addPrescriptionFunc() {
    this.setState({
      changePageView: true
    });
  }
  componentPageView() {
    this.setState({
      changePageView: false
    });
  }

  render() {
    return (
      <Container>
        <View style={Styles.mainContainerView}>
          <View style={Styles.headerContainer}>
            <CustomNavBar title="Profile" addPrescription={this.addPrescriptionFunc.bind(this)} changePageView={this.state.changePageView} pageView={this.state.pageView} />
          </View>

          <View style={Styles.contentView}>
            <View style={Styles.mainContainer}>
              <View style={Styles.profileView}>
                <View style={Styles.imageView}>
                  <View style={Styles.imageBorderView} />
                </View>
                <View style={Styles.profileDescriptionView}>
                  <View style={Styles.profileNameView}>
                    <Text style={Styles.nameText}>{this.state.patientsList.name}</Text>
                  </View>
                  <View style={Styles.decriptionView}>
                    <Text style={Styles.descriptionText}>{this.state.patientsList.gender}, 45 years old</Text>
                  </View>

                  <View style={Styles.mainButtonView}>
                    <TouchableOpacity onPress={this.personalInFoFunc.bind(this)}>
                      {this.state.pageView == 'personalInFo' ? (
                        <View style={Styles.buttonFocusView}>
                          <Text style={Styles.buttonFocusText}>Personal Info</Text>
                        </View>
                      ) : (
                        <View style={[Styles.buttonFocusView, { backgroundColor: 'white' }]}>
                          <Text style={[Styles.buttonFocusText, { color: 'black' }]}>Personal Info</Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.mainButtonView}>
                    <TouchableOpacity onPress={this.prescriptionFunc.bind(this)}>
                      {this.state.pageView == 'prescription' ? (
                        <View style={Styles.buttonFocusView}>
                          <Text style={Styles.buttonFocusText}>Prescription</Text>
                        </View>
                      ) : (
                        <View style={[Styles.buttonFocusView, { backgroundColor: 'white' }]}>
                          <Text style={[Styles.buttonFocusText, { color: 'black' }]}>Prescription</Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.profileEmptyView} />
                </View>
              </View>
              <View style={Styles.contentSubView}>
                {this.state.pageView == 'personalInFo' ? (
                  <View style={Styles.componentView}>
                    <Text>This is personalInFo</Text>
                  </View>
                ) : (
                  <View style={Styles.componentView}>
                    {this.state.changePageView == false ? (
                      <PrescriptionList prescriptions={this.state.patientsList} />
                    ) : (
                      <AddPrescription
                        prescriptions={this.state.patientsList}
                        componentPageView={this.componentPageView.bind(this)}
                        changePageView={this.state.changePageView}
                        pageView={this.state.pageView}
                      />
                    )}
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default Profile;
