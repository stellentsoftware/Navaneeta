import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
if (windowSize.height == 552) {
  var labelInputHeight = windowSize.height / 16;
} else {
  var labelInputHeight = windowSize.height / 17;
}
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  headerView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  headerText: {
    color: Colors.black,
    fontWeight: '700'
  },
  contentView: {
    flex: 0.9,
    backgroundColor: Colors.white
  },
  borderRadiusView: {
    flex: 1,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  subContentView: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.background,
    marginTop: 15
  },
  subContentEmptyView: {
    flex: 0.2,
    backgroundColor: Colors.background
  },
  formView: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },

  formEmptyView: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form_empty_view: {
    flex: 0.025,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  genderView: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  genderEmptyView: {
    flex: 0.01,
    alignItems: 'center',
    justifyContent: 'center'
  },
  genderTextView: {
    flex: 0.02,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  dropDownView: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  yearTextView: {
    flex: 0.02,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  yearEmptyView: {
    flex: 0.003,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropDownDataView: {
    flex: 0.027,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  inputEmptyView: {
    flex: 0.01
  },
  labelView: {
    flex: 0.02,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  labelText: {
    fontWeight: '500'
  },
  emptySpaceView: {
    flex: 0.001
  },
  inputLabelView: {
    flex: 0.04,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  inputLabelBorderView: {
    height: labelInputHeight,
    paddingLeft: 12,
    borderColor: Colors.border,
    borderWidth: 1,
    backgroundColor: Colors.border,
    borderRadius: 5,
    width: windowSize.width / 4
  },
  empty_View: {
    flex: 0.029
  },
  empty_Space_View: {
    flex: 0.031
  },
  buttonView: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonBorderStyle: {
    height: windowSize.height / 15,
    borderColor: Colors.green,
    borderWidth: 1,
    backgroundColor: Colors.green,
    borderRadius: 5,
    width: windowSize.width / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '800'
  },
  textInputStyle: {
    fontSize: 14,
    fontWeight: '400'
  }
});
