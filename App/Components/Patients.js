import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/PatientStyles';
import CustomNavBar from './../Components/CustomNavBar';
import { Images, Metrics } from '../Themes';
import { Content, Header } from 'native-base';
import dismissKeyboard from 'dismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import GridView from 'react-native-grid-view';
import { Button, Text as NBText, Contant, Form, Item, Input, Label, Footer, FooterTab, Card, CardItem, Body, Container } from 'native-base';
import firebase from '../Services/Firebase';
import { firebaseConnect } from 'react-redux-firebase';
import Profile from './../Containers/Profile';

var packs = [];
var PatientsListArray = [];
const ITEMS_PER_ROW = 2;
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      spinner: true,
      searchText: ''
    };
  }

  handleSearchBar = text => {
    this.setState({ searchText: text });
  };
  componentWillReceiveProps(nextProps) {
    PatientsListArray = [];
    Object.keys(nextProps.patients).forEach(function(key) {
      PatientsListArray.push(nextProps.patients[key]);
    });
    this.setState({
      dataSource: PatientsListArray,
      spinner: false
    });
  }
  componentWillMount() {
    if (packs === null) {
      this.setState({
        spinner: false
      });
    }
  }
  cancel() {
    this.setState({
      searchText: ''
    });
  }
  listOfPatients(list) {
    return (
      <TouchableOpacity onPress={() => NavigationActions.Profile({ patientsList: list })}>
        <View style={Styles.gridBorderView}>
          <View style={Styles.grid_Main_View}>
            <View style={Styles.imageView}>
              <View style={Styles.imageStyle} />
            </View>
            <View style={Styles.emptyView} />
            <View style={Styles.dataView}>
              <View style={Styles.emptySpaceView} />
              <View style={Styles.dataListView}>
                <Text style={Styles.dataTextStyle}>{list.name}</Text>
              </View>
              <View style={Styles.dataListView}>
                <Text style={[Styles.dataTextStyle, { fontSize: 11 }]}>{list.address}</Text>
              </View>
              <View style={Styles.dataListView}>
                <Text style={[Styles.dataTextStyle, { fontSize: 11 }]}>{list.address2}</Text>
              </View>
              <View style={Styles.emptySpaceView} />
            </View>
            <View style={Styles.emptyView} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Container>
        <View style={Styles.mainContainer}>
          {this.state.spinner ? (
            <ActivityIndicator size="large" color="black" thickness={10} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
          ) : packs === null ? (
            <View style={[Styles.mainContainer, { alignItems: 'center' }]}>
              <Text style={Styles.textStyle}> There is no Patients</Text>
            </View>
          ) : (
            <View style={Styles.mainContainer}>
              <View style={Styles.headerView}>
                <View style={Styles.searchInputMainBorderView}>
                  <View style={Styles.searchInputMainView}>
                    <View style={Styles.searchIconView}>
                      <Image style={Styles.searchIconStyle} source={Images.search} />
                    </View>
                    <View style={Styles.searchTextView}>
                      <Input
                        ref="search"
                        value={this.state.searchText}
                        keyboardType="default"
                        returnKeyType="done"
                        placeholderTextColor="white"
                        autoCapitalize="none"
                        style={Styles.textInputStyle}
                        placeholder="Search Patients"
                        autoCorrect={false}
                        onChangeText={this.handleSearchBar}
                        underlineColorAndroid="transparent"
                        // onSubmitEditing={() => this.refs.password._textInput.focus()}
                      />
                    </View>
                    <View style={Styles.cancelIconView}>
                      <TouchableOpacity onPress={this.cancel.bind(this)}>
                        <Image style={Styles.cancelIconStyle} source={Images.cancel} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={Styles.contentView}>
                <View style={Styles.gridViewStyle}>
                  <View style={Styles.gridMainView}>
                    <GridView items={this.state.dataSource} itemsPerRow={ITEMS_PER_ROW} renderItem={this.listOfPatients} />
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  // getting a patients list from firebase database
  firebase
    .database()
    .ref('/doctor/Patients/')
    .once('value', snapshot => {
      packs = snapshot.val();
    });

  return {
    patients: packs
  };
};

const PatientsListComponent = firebaseConnect([{ type: 'once', path: 'doctor/Patients' }])(Patients);

export default connect(mapStateToProps)(PatientsListComponent);
