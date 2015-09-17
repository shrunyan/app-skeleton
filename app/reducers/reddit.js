import { combineReducers } from 'redux'
import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS
} from '../actions/reddit'

let initialTopics = [
  {
    id: 'riotjs',
    text: 'Riot'
  },
  {
    id: 'reactjs',
    text: 'React'
  },
  {
    id: 'angular',
    text: 'Angular'
  }
]
function topics (state = initialTopics, action) {
  switch (action.type) {
    default:
      return state
  }
}

function selected (state = 'riotjs', action) {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}

function processPosts (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdate: action.receivedAt
      })
    default:
      return state
  }
}

function posts (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        [action.reddit]: processPosts(state[action.reddit], action)
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  topics,
  posts,
  selected
})

export default reducer
