const initialState = {
  count: 0
}
export default function exampleReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
      break;
    case 'DECREMENT':
      return state - action.payload
      break;
    default:
      return state
  }
}
