import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

// Import your reducers and add them to the combineReducers export
export default combineReducers({
  counter,
  user
})
