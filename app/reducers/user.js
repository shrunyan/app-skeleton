const initialState = {
  first_name: 'Stuart',
  last_name: 'Runyan',
  email: 'test'
}
export default function gravatar(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      state.email = action.payload
      return state
      break;
    default:
      return state
  }
}
