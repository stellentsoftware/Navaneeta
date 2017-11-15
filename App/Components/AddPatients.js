import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, Alert } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/AddPatientStyles';
import CustomNavBar from './../Components/CustomNavBar';
import { Images, Metrics } from '../Themes';
import { Content, Header } from 'native-base';
import dismissKeyboard from 'dismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import { Button, Text as NBText, Contant, Form, Item, Input, Label, Footer, FooterTab, Card, CardItem, Body, Container } from 'native-base';
import firebase from '../Services/Firebase';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Dropdown } from 'react-native-material-dropdown';

var radio_props = [{ label: 'Male', value: 0 }, { label: 'Female', value: 1 }];
var data = [];
class AddPatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients_id: '',
      name: '',
      phoneNumber: '',
      address: '',
      address2: '',
      state: '',
      city: '',
      zip_code: '',
      radioButtonValue: '',
      radio_props: [{ label: 'Male', value: 0 }, { label: 'Female', value: 1 }],
      genderValue: '',
      value: ''
    };
  }
  handlePatientsID = text => {
    this.setState({ patients_id: text });
  };
  handleName = text => {
    this.setState({ name: text });
  };
  handlePhoneNumber = text => {
    this.setState({ phoneNumber: text });
  };
  handleAddress = text => {
    this.setState({ address: text });
  };
  handleAddress2 = text => {
    this.setState({ address2: text });
  };
  handleState = text => {
    this.setState({ state: text });
  };
  handleCity = text => {
    this.setState({ city: text });
  };
  handleZip_code = text => {
    this.setState({ zip_code: text });
  };
  componentWillMount() {
    for (var i = 1; i <= 100; i++) {
      data.push({ value: i.toString() });
    }
  }
  validPhoneNumber = PhoneNumber => {
    var phoneNumber = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    return phoneNumber.test(PhoneNumber);
  };
  radioButtonFunc(value) {
    this.setState(
      {
        radioButtonValue: value
      },
      () => {
        if (this.state.radioButtonValue == 0) {
          this.setState({
            genderValue: 'Male'
          });
        } else {
          this.setState({
            genderValue: 'Female'
          });
        }
      }
    );
  }

  onSubmit() {
    if (this.state.name == '' || this.state.name == null) {
      Alert.alert('Name', 'Name is required');
    } else if (this.state.phoneNumber == '' || this.state.phoneNumber == null) {
      Alert.alert('Phone Number', 'Phone Number is required');
    } else if (this.state.phoneNumber.length < 10) {
      Alert.alert('Phone Number', 'Phone number contains 10 numbers');
    } else if (!this.validPhoneNumber(this.state.phoneNumber)) {
      Alert.alert('Phone Number', 'Please enter correct phone Number');
    } else if (this.state.address == '' || this.state.address == null) {
      Alert.alert('Address', 'Address is required');
    } else if (this.state.address2 == '' || this.state.address2 == null) {
      Alert.alert('Address 2', 'Address 2 is required');
    } else if (this.state.city == '' || this.state.city == null) {
      Alert.alert('City', 'City is required');
    } else if (this.state.state == '' || this.state.state == null) {
      Alert.alert('State', 'State is required');
    } else if (this.state.zip_code == '' || this.state.zip_code == null) {
      Alert.alert('Zip Code', 'Zip Code is required');
    } else if (this.state.zip_code.length < 6) {
      Alert.alert('Zip Code', 'Zip Code contains 6 numbers');
    } else {
      //adding patients to the firebase database
      var path = '/doctor/Patients/';
      var patientId = firebase
        .database()
        .ref(path)
        .child(firebase._.authUid)
        .push().key;
      var patientPath = '/doctor/Patients/' + patientId;
      firebase
        .database()
        .ref(patientPath)
        .set({
          patients_id: patientId,
          name: this.state.name,
          phoneNumber: this.state.phoneNumber,
          address: this.state.address,
          address2: this.state.address2,
          city: this.state.city,
          state: this.state.state,
          zip_code: this.state.zip_code,
          gender: this.state.genderValue
        });
      this.props.patientsFunc();
    }
  }

  render() {
    return (
      <Container>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerView}>
            <Text style={Styles.headerText}>Add Patients</Text>
          </View>
          <View style={Styles.contentView}>
            <View style={Styles.borderRadiusView}>
              <View style={Styles.subContentView}>
                <View style={Styles.formView}>
                  <View style={Styles.formEmptyView} />
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}> Name</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.name}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="Name"
                          autoCorrect={false}
                          onChangeText={this.handleName}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}> Phone Number</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.phoneNumber}
                          keyboardType="numeric"
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="none"
                          style={Styles.textInputStyle}
                          placeholder="Phone Number"
                          autoCorrect={false}
                          maxLength={10}
                          onChangeText={this.handlePhoneNumber}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}> Address</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.address}
                          keyboardType="default"
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="none"
                          style={Styles.textInputStyle}
                          placeholder="Address 1"
                          autoCorrect={false}
                          onChangeText={this.handleAddress}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.empty_Space_View} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.address2}
                          keyboardType="default"
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="none"
                          style={Styles.textInputStyle}
                          placeholder="Address 2"
                          autoCorrect={false}
                          onChangeText={this.handleAddress2}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}>City</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.city}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="City"
                          autoCorrect={false}
                          onChangeText={this.handleCity}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}>State</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.state}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="State"
                          autoCorrect={false}
                          onChangeText={this.handleState}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.inputEmptyView} />
                    <View style={Styles.labelView}>
                      <Text style={Styles.labelText}>Zip-Code</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.zip_code}
                          keyboardType="numeric"
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          style={Styles.textInputStyle}
                          placeholder="Zip-Code"
                          autoCorrect={false}
                          onChangeText={this.handleZip_code}
                          maxLength={6}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.textInputView}>
                    <View style={Styles.genderView}>
                      <View style={Styles.genderEmptyView} />
                      <View style={Styles.genderTextView}>
                        <Text style={Styles.labelText}>Gender</Text>
                      </View>
                      <View style={[Styles.genderTextView, { alignItems: 'center' }]}>
                        <RadioForm
                          radio_props={this.state.radio_props}
                          initial={0}
                          buttonSize={10}
                          borderWidth={0.5}
                          formHorizontal={true}
                          buttonOuterSize={20}
                          labelHorizontal={true}
                          onPress={this.radioButtonFunc.bind(this)}
                        />
                      </View>
                    </View>
                    <View style={Styles.dropDownView}>
                      <View style={Styles.yearTextView}>
                        <Text style={Styles.labelText}>Year</Text>
                      </View>
                      <View style={Styles.yearEmptyView} />
                      <View style={Styles.dropDownDataView}>
                        <Dropdown label="Select Year" data={data} baseColor={'black'} containerStyle={{ width: 130 }} selectedItemColor={'black'} value={this.state.value} />
                      </View>
                    </View>
                  </View>

                  {/*<View style={Styles.form_empty_view} />*/}
                  <View style={Styles.form_empty_view} />
                  <View style={Styles.buttonView}>
                    <View style={Styles.empty_Space_View} />
                    <View style={Styles.inputLabelView}>
                      <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                        <View style={Styles.buttonBorderStyle}>
                          <Text style={Styles.buttonText}>SUBMIT</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={Styles.empty_View} />
                  </View>
                  <View style={Styles.form_empty_view} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default AddPatients;
