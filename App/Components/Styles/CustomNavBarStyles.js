import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row'
  },
  mainLeftView: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
  },
  textStyle: {
    fontSize: 14,
    color: Colors.white,
    marginLeft: 5
  },
  mainMiddleView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainRightView: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  navbarleftText: {
    color: Colors.white,
    marginLeft: 5
  },
  navbarTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400'
  },
  addIconStyle: {
    height: 15,
    width: 15
  },
  addText: {
    fontSize: 15,
    color: Colors.white,
    marginLeft: 5
  }
});
