import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: Colors.green
  },
  statusBar: {
    height: 20,
    backgroundColor: Colors.green
  },
  form: {
    margin: 30,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    flex: 1
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row'
  },
  loginButtonWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width: windowSize.width / 4,
    justifyContent: 'center',
    marginRight: 20,
    alignSelf: 'center',
    backgroundColor: Colors.green
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  iconStyle: {
    height: 20,
    width: 20
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700'
  }
});
