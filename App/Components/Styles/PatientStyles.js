import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
if (windowSize.height == 552) {
  var labelInputHeight = windowSize.height / 16;
} else {
  var labelInputHeight = windowSize.height / 15;
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
  searchInputMainBorderView: {
    height: labelInputHeight,
    paddingLeft: 12,
    borderColor: Colors.border,
    borderWidth: 1,
    backgroundColor: Colors.border,
    width: windowSize.width / 1.5,
    justifyContent: 'center'
  },
  searchInputMainView: {
    flex: 1,
    flexDirection: 'row'
  },
  searchIconView: {
    flex: 0.04,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIconStyle: {
    height: 16,
    width: 16
  },
  searchTextView: {
    flex: 0.9,
    justifyContent: 'center'
  },
  cancelIconView: {
    flex: 0.06,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelIconStyle: {
    height: 18,
    width: 18
  },
  textInputStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.white
  },
  contentView: {
    flex: 0.9,
    backgroundColor: Colors.white
  },
  gridViewStyle: {
    flex: 1,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  gridMainView: {
    flex: 1,
    marginTop: 10
  },
  gridBorderView: {
    height: windowSize.height / 7,
    width: windowSize.width / 3,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7
  },
  grid_Main_View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageView: {
    flex: 0.2
  },
  imageStyle: {
    height: windowSize.height / 9,
    width: windowSize.width / 15,
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  emptyView: {
    flex: 0.05,
    justifyContent: 'center'
  },
  dataView: {
    flex: 0.7
  },
  emptySpaceView: {
    flex: 0.1,
    justifyContent: 'center'
  },
  dataListView: {
    flex: 0.2,
    justifyContent: 'center'
  },
  dataTextStyle: {
    fontSize: 15,
    fontWeight: '500'
  },
  textStyle: {
    color: Colors.green,
    fontSize: 20,
    fontWeight: '800'
  }
});
