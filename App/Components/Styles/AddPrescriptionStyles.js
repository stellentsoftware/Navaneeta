import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
if (windowSize.height == 552) {
  var labelInputHeight = windowSize.height / 14.5;
} else {
  var labelInputHeight = windowSize.height / 17;
}
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  inputLabelBorderView: {
    height: labelInputHeight,
    paddingLeft: 12,
    borderColor: Colors.content,
    borderWidth: 1,
    backgroundColor: Colors.content,
    borderRadius: 5,
    width: windowSize.width / 1.85,
    justifyContent: 'center'
  },
  inputLabelMultilineBorderView: {
    height: windowSize.height / 7,
    paddingLeft: 12,
    borderColor: Colors.content,
    borderWidth: 1,
    backgroundColor: Colors.content,
    borderRadius: 5,
    width: windowSize.width / 1.85,
    justifyContent: 'center'
  },
  buttonBorderStyle: {
    height: windowSize.height / 15,
    borderColor: Colors.green,
    borderWidth: 1,
    backgroundColor: Colors.green,
    borderRadius: 5,
    width: windowSize.width / 4.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '800'
  },
  headerView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  headerText: {
    fontWeight: '600'
  },
  contentView: {
    flex: 0.9,
    backgroundColor: Colors.content
  },
  subContentView: {
    flex: 1,
    borderColor: Colors.content,
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15
  },
  formView: {
    flex: 0.85,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white
  },
  emptyView: {
    flex: 0.05
  },
  mainLabelView: {
    flex: 0.1,
    flexDirection: 'row'
  },
  labelTextView: {
    flex: 0.02,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  emptySpaceView: {
    flex: 0.002
  },
  inputLabelView: {
    flex: 0.07,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  emptySpace_View: {
    flex: 0.008
  },
  caseLabelView: {
    flex: 0.3,
    flexDirection: 'row'
  },
  caseLabelTextView: {
    flex: 0.02,
    alignItems: 'flex-end',
    marginTop: 20
  },
  addButtonEmptyView: {
    flex: 0.022
  },
  addButtonView: {
    flex: 0.07,
    alignItems: 'center',
    flexDirection: 'row'
  },
  addIconStyle: {
    height: 15,
    width: 15
  },
  addText: {
    fontSize: 15,
    color: Colors.green,
    marginLeft: 5
  },
  submitButtonView: {
    flex: 0.15,
    flexDirection: 'row'
  },
  submitButtonEmptyView: {
    flex: 0.1
  },
  buttonView: {
    flex: 0.05,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  contentEmptyView: {
    flex: 0.1,
    backgroundColor: Colors.content
  },
  textInputStyle: {
    fontSize: 14,
    fontWeight: '400'
  }
});
