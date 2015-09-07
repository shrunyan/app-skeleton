import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import reddit from './reddit'

// Import your reducers and add them to the combineReducers export
export default combineReducers({
  counter,
  user,
  reddit
})
