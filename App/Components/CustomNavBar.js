import React, { PropTypes } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text, Button, connectStyle, Toast } from 'native-base';
import { connect } from 'react-redux';
import { Colors, Images } from '../Themes';
import CustomNavBarStyles from './Styles/CustomNavBarStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux';

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePageView: this.props.changePageView,
      pageView: this.props.pageView
    };
  }
  static defaultProps = { show: true };
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
    show: PropTypes.bool
  };
  render() {
    const { title, transparent, whiteTheme, name, titleName, changePageView, pageView } = this.props;
    const styles = this.props.style;
    let subtitle = null;
    return (
      <View style={styles.mainView}>
        {title === 'Login' ? (
          <View style={styles.mainLeftView} />
        ) : (
          <View style={styles.mainLeftView}>
            <TouchableOpacity onPress={() => NavigationActions.pop()}>
              {title === 'Homeopathy' ? (
                <View style={styles.mainLeftView}>
                  <Icon name="ios-arrow-back" size={20} color="#fff" />
                  <Text style={styles.textStyle}>Homeopathy</Text>
                </View>
              ) : (
                <View style={styles.mainLeftView}>
                  <Icon name="ios-arrow-back" size={20} color="#fff" />
                  <Text style={styles.textStyle}>Profile</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.mainMiddleView}>
          <Text style={styles.navbarTitle}>{title}</Text>
        </View>
        <View style={styles.mainRightView}>
          {title === 'Profile' && changePageView === false && pageView === 'prescription' ? (
            <TouchableOpacity onPress={() => this.props.addPrescription()}>
              <View style={styles.mainRightView}>
                <Image style={styles.addIconStyle} source={Images.add} />
                <Text style={styles.addText}>Add Prescription</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}

CustomNavBar.contextTypes = {
  drawer: React.PropTypes.object
};
export default connectStyle('Navaneeta.CustomNavBar', CustomNavBarStyles)(CustomNavBar);
