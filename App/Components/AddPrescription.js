import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/AddPrescriptionStyles';
import CustomNavBar from './../Components/CustomNavBar';
import { Images, Metrics } from '../Themes';
import dismissKeyboard from 'dismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { Button, Text as NBText, Contant, Form, Item, Input, Label, Footer, FooterTab, Card, CardItem, Body, Container, Content, Header } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../Services/Firebase';
import { firebaseConnect } from 'react-redux-firebase';
import moment from 'moment';
import Profile from './../Containers/Profile';
import PrescriptionList from './PrescriptionList';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class AddPrescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treatment: '',
      case: '',
      medication: '',
      notes: '',
      prescriptions: this.props.prescriptions,
      changePageView: this.props.changePageView,
      pageView: this.props.pageView
    };
  }
  componentWillMount() {}
  handleTreatment = text => {
    this.setState({ treatment: text });
  };
  handleCase = text => {
    this.setState({ case: text });
  };
  handleMedication = text => {
    this.setState({ medication: text });
  };
  handleNotes = text => {
    this.setState({ notes: text });
  };
  onSubmit() {
    if (this.state.treatment == '' || this.state.treatment == null) {
      Alert.alert('Treatment', 'Treatment is required');
    } else if (this.state.case == '' || this.state.case == null) {
      Alert.alert('Case', 'Case is required');
    } else if (this.state.medication == '' || this.state.medication == null) {
      Alert.alert('Medication', 'Medication is required');
    } else if (this.state.notes == '' || this.state.notes == null) {
      Alert.alert('Notes', 'Notes is required');
    } else {
      //adding prescriptions to the firebase database
      var treatment = this.state.treatment;
      var Case = this.state.case;
      var medication = this.state.medication;
      var notes = this.state.notes;
      var patients_id = this.state.prescriptions.patients_id;
      var path = '/doctor/Patients/';
      var PrescriptionRef = firebase
        .database()
        .ref(path)
        .child(patients_id);

      PrescriptionRef.once('value', function(snapshot) {
        if (snapshot.val() === null) {
          alert('not exists');
        } else {
          var path = '/doctor/Patients/' + patients_id + '/Prescription/';
          var PrescriptionId = firebase
            .database()
            .ref(path)
            .child(firebase._.authUid)
            .push().key;
          var patientPath = '/doctor/Patients/' + patients_id + '/Prescription/' + PrescriptionId;
          firebase
            .database()
            .ref(patientPath)
            .set({
              treatment: treatment,
              case: Case,
              medication: medication,
              notes: notes,
              Date: moment(new Date())
                .format('DD MMM YYYY')
                .toLowerCase(),
              PrescriptionId: PrescriptionId
            });
        }
      });
      this.props.componentPageView();
    }
  }

  render() {
    return (
      <Container>
        <View style={Styles.mainContainer}>
          <View style={Styles.headerView}>
            <Text style={Styles.headerText}>Add Prescription</Text>
          </View>

          <View style={Styles.contentView}>
            <View style={Styles.subContentView}>
              <View style={Styles.mainContainer}>
                <View style={Styles.formView}>
                  <View style={Styles.emptyView} />
                  <View style={Styles.mainLabelView}>
                    <View style={Styles.labelTextView}>
                      <Text>Treatment</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.treatment}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="obesity"
                          autoCorrect={false}
                          onChangeText={this.handleTreatment}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.emptySpace_View} />
                  </View>
                  <View style={Styles.caseLabelView}>
                    <View style={Styles.caseLabelTextView}>
                      <Text>Case History</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelMultilineBorderView}>
                        <Input
                          value={this.state.case}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="obesity"
                          autoCorrect={false}
                          // multiline={true}
                          textAlignVertical={'top'}
                          numberOfLine={10}
                          onChangeText={this.handleCase}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.emptySpace_View} />
                  </View>
                  <View style={Styles.mainLabelView}>
                    <View style={Styles.labelTextView}>
                      <Text>Medication</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.medication}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="obesity"
                          autoCorrect={false}
                          onChangeText={this.handleMedication}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.emptySpace_View} />
                  </View>
                  <View style={Styles.mainLabelView}>
                    <View style={Styles.addButtonEmptyView} />
                    <View style={Styles.addButtonView}>
                      <Image style={Styles.addIconStyle} source={Images.addGreen} />
                      <Text style={Styles.addText}>Add Medicine</Text>
                    </View>
                    <View style={Styles.emptySpace_View} />
                  </View>
                  <View style={Styles.mainLabelView}>
                    <View style={Styles.labelTextView}>
                      <Text>Notes</Text>
                    </View>
                    <View style={Styles.emptySpaceView} />
                    <View style={Styles.inputLabelView}>
                      <View style={Styles.inputLabelBorderView}>
                        <Input
                          value={this.state.notes}
                          returnKeyType="done"
                          placeholderTextColor="#464F54"
                          autoCapitalize="words"
                          style={Styles.textInputStyle}
                          placeholder="Notes"
                          autoCorrect={false}
                          onChangeText={this.handleNotes}
                          underlineColorAndroid="transparent"
                          onSubmitEditing={event => {
                            dismissKeyboard();
                          }}
                        />
                      </View>
                    </View>
                    <View style={Styles.emptySpace_View} />
                  </View>
                  <View style={Styles.submitButtonView}>
                    <View style={Styles.submitButtonEmptyView} />
                    <View style={Styles.buttonView}>
                      <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                        <View style={Styles.buttonBorderStyle}>
                          <Text style={Styles.buttonText}>SUBMIT</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={Styles.contentEmptyView} />
              </View>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
const fbWrappedComponent = firebaseConnect([{ type: 'once', path: 'doctor/Patients' }])(AddPrescription);

export default fbWrappedComponent;
