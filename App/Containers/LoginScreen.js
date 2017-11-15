import React, { PropTypes } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Styles from './Styles/LoginScreenStyles';
import CustomNavBar from './../Components/CustomNavBar';
import { Images, Metrics } from '../Themes';
import dismissKeyboard from 'dismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';
import LoginActions from '../Redux/LoginRedux';
import { Button, Text as NBText, Contant, Form, Item, Input, Label, Footer, FooterTab, Card, CardItem, Body, Content, Header } from 'native-base';
import firebase from '../Services/Firebase';

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  };
  isAttempting = false;
  constructor(props) {
    super(props);
    this.state = {
      email: 'suresh@stellentsoft.com',
      password: 'password',
      error: '',
      loading: false
    };
    this.isAttempting = false;
  }
  validEmail = Email => {
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return email.test(Email);
  };
  handlePressLogin = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    if (this.state.email == '' || this.state.email == 'null') {
      Alert.alert('Email', 'Email is required');
    } else if (!this.validEmail(this.state.email)) {
      Alert.alert('Email', 'Please enter correct Email-ID');
    } else if (this.state.password == '' || this.state.password == 'null') {
      Alert.alert('Password', 'Password is required');
    } else {
      // user logged in the firebase database
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ loading: false }, () => {
            NavigationActions.Homeopathy();
          });
        })
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
              this.setState({
                email: 'suresh@stellentsoft.com',
                password: 'password',
                error: '',
                loading: false
              });
              alert('onAuthSuccess:' + JSON.stringify(user));
              var path = '/doctor/details/';
              NavigationActions.Homeopathy();
            })
            .catch(this.onAuthFailed.bind(this));
        });
    }
  };

  onAuthSuccess(user) {}
  //Error message from firebase databse
  onAuthFailed() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
    alert('onAuthFailed:' + this.state.error);
  }

  renderButtonOrLoading() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="black" />
        </View>
      );
    }
  }

  handleChangeEmail = text => {
    this.setState({ email: text });
  };
  handleChangePassword = text => {
    this.setState({ password: text });
  };

  render() {
    const { email, password } = this.state;
    const { fetching } = this.props;
    const editable = !fetching;
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly;
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.headerContainer}>
          <CustomNavBar title="Login" />
        </View>
        <Content>
          <View style={Styles.form}>
            <Form>
              <Item>
                <Image style={Styles.iconStyle} source={Images.user} />
                <Input
                  value={email}
                  editable={editable}
                  keyboardType="default"
                  returnKeyType="next"
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  placeholder="Email"
                  autoCorrect={false}
                  onChangeText={this.handleChangeEmail}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={event => {
                    dismissKeyboard();
                  }}
                />
              </Item>
              <Item>
                <Image style={Styles.iconStyle} source={Images.lock} />
                <Input
                  ref="password"
                  value={password}
                  editable={editable}
                  keyboardType="default"
                  returnKeyType="go"
                  placeholder="Password"
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={this.handleChangePassword}
                  underlineColorAndroid="transparent"
                  onSubmitEditing={event => {
                    dismissKeyboard();
                    this.handlePressLogin();
                  }}
                />
              </Item>
            </Form>
            <View style={Styles.loginRow}>
              <View style={Styles.loginButtonWrapper}>
                <Button style={Styles.loginButton} onPress={() => this.handlePressLogin()}>
                  <NBText style={Styles.buttonTextStyle}>Sign In</NBText>
                </Button>
              </View>
              <View style={Styles.loginButtonWrapper}>
                <Button style={Styles.loginButton} onPress={() => NavigationActions.Profile()}>
                  <NBText style={Styles.buttonTextStyle}>Cancel</NBText>
                </Button>
              </View>
            </View>
            {this.renderButtonOrLoading()}
          </View>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.login.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
