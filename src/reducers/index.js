import {combineReducers} from 'redux'
import data from './crudReducer'
import auth from './authReducer'
import deleting from './deleteStatusReducer'
import fetching from './fetchStatusReducer'
import updating from './updateStatusReducer'

export default combineReducers({data, auth, deleting, fetching, updating})
