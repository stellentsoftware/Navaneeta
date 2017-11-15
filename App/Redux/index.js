import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { firebaseStateReducer } from 'react-redux-firebase'

export default () => {
	/* ------------- Assemble The Reducers ------------- */
	const rootReducer = combineReducers({
		github: require('./GithubRedux').reducer,
		login: require('./LoginRedux').reducer,
		firebase: firebaseStateReducer
	})

	return configureStore(rootReducer, rootSaga)
}
