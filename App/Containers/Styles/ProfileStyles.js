import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: Colors.green
  },
  profileView: {
    flex: 0.25
  },
  contentSubView: {
    flex: 0.85
  },
  contentView: {
    flex: 0.9
  },
  mainContainerView: {
    flex: 1
  },
  imageView: {
    flex: 0.1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBorderView: {
    backgroundColor: Colors.green,
    width: 130,
    height: 150,
    borderRadius: 5,
    borderColor: Colors.green,
    borderWidth: 1
  },
  profileDescriptionView: {
    flex: 0.15,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  profileNameView: {
    flex: 0.01,
    alignItems: 'center'
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black
  },
  decriptionView: {
    flex: 0.02,
    alignItems: 'center'
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.grey
  },
  mainButtonView: {
    flex: 0.02
  },
  buttonFocusView: {
    flex: 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.lightgrey,
    borderWidth: 1,
    backgroundColor: Colors.green,
    width: windowSize.width / 4.4
  },
  buttonFocusText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.white
  },
  profileEmptyView: {
    flex: 0.08,
    alignItems: 'center'
  },
  componentView: {
    flex: 1
  }
});
