import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, ListView, LayoutAnimation, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/PrescriptionListStyles';
import CustomNavBar from './../Components/CustomNavBar';
import { Images, Metrics } from '../Themes';
import { Content, Header } from 'native-base';
import dismissKeyboard from 'dismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { Button, Text as NBText, Contant, Form, Item, Input, Label, Footer, FooterTab, Card, CardItem, Body, Container } from 'native-base';
import firebase from '../Services/Firebase';
import { firebaseConnect } from 'react-redux-firebase';

const IMAGES_PER_ROW = 2;
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var packs;
var PrescriptionListArray = [];

class PrescriptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      spinner: true,
      changePageView: this.props.changePageView,
      prescriptions: this.props.prescriptions
    };
  }

  componentWillReceiveProps(nextProps) {
    PrescriptionListArray = [];
    Object.keys(nextProps.prescription).forEach(function(key) {
      PrescriptionListArray.push(nextProps.prescription[key]);
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(PrescriptionListArray),
      spinner: false
    });
  }
  componentWillMount() {
    var patients_id = this.state.prescriptions.patients_id;
    //  getting  prescription list from the firebase database
    firebase
      .database()
      .ref('/doctor/Patients/' + patients_id + '/Prescription/')
      .once('value', snapshot => {
        packs = snapshot.val();
        if (packs === null) {
          this.setState({
            spinner: false
          });
        } else {
          PrescriptionListArray = [];
          Object.keys(packs).forEach(function(key) {
            PrescriptionListArray.push(packs[key]);
          });

          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(PrescriptionListArray),
            spinner: false
          });
        }
      });
  }
  listOfPrescriptions(list) {
    return (
      <View style={Styles.mainContainer}>
        <View style={[Styles.headerBorderView, { margin: 1 }]}>
          <View style={Styles.headerView}>
            <View style={Styles.rowTextView}>
              <Text style={Styles.rowText}>{list.Date}</Text>
            </View>
            <View style={Styles.rowTextView}>
              <Text style={Styles.rowText} numberOfLines={1}>
                {list.treatment}
              </Text>
            </View>
            <View style={Styles.medicineView}>
              <Text style={{}}>{list.medication}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          {this.state.spinner ? (
            <ActivityIndicator size="large" color="black" thickness={10} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
          ) : packs == null ? (
            <View style={Styles.mainContainer}>
              <Text style={Styles.textStyle}> There is no Prescription for this Patient</Text>
            </View>
          ) : (
            <View style={Styles.mainContainer}>
              <View style={Styles.headerMainView}>
                <View style={Styles.headerBorderView}>
                  <View style={Styles.headerView}>
                    <View style={Styles.rowTextView}>
                      <Text style={Styles.rowText}>Date</Text>
                    </View>
                    <View style={Styles.rowTextView}>
                      <Text style={Styles.rowText}>Problem</Text>
                    </View>
                    <View style={Styles.medicineView}>
                      <Text style={{}}>Medicines</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={Styles.listView}>
                <ListView dataSource={this.state.dataSource} renderRow={this.listOfPrescriptions.bind(this)} />
              </View>
            </View>
          )}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // firebase
  //   .database()
  //   .ref('/doctor/Patients/' + patients_id + '/Prescription/')
  //   .once('value', snapshot => {
  //     packs = snapshot.val();
  //   });
  return {
    prescription: packs
  };
};

const PrescriptionListComponent = firebaseConnect([{ type: 'once', path: 'doctor/Patients' }])(PrescriptionList);

export default connect(mapStateToProps)(PrescriptionListComponent);
