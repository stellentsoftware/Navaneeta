import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerMainView: {
    flex: 0.15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  headerBorderView: {
    height: windowSize.height / 14,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    width: windowSize.width / 1.35,
    backgroundColor: Colors.white
  },
  headerView: {
    flex: 1,
    flexDirection: 'row'
  },
  rowTextView: {
    flex: 0.2,
    justifyContent: 'center'
  },
  rowText: {
    marginLeft: 30
  },
  medicineView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listView: {
    flex: 0.85
  },
  textStyle: {
    color: Colors.green,
    fontSize: 20,
    fontWeight: '800'
  }
});
