import RNfirebase from 'react-native-firebase'
import {firebaseConfig} from '../Config/FirebaseConfig'

const instance = RNfirebase.initializeApp(firebaseConfig)

export default instance
