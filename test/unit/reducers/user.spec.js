import test from 'tape'
import {createStore} from 'redux'
import user from '../../../app/reducers/user'

const store = createStore(user)

test('reducer:user | has initial state', (t) => {
  console.log(store.getState())
  t.ok(store.getState())
  t.equal(store.getState().email, 'test')
  t.end()
})

test('reducer:user | store handles <actions></actions>', (t) => {
  store.dispatch({
    type: 'SET_USER_EMAIL',
    payload: 'FOO'
  })

  t.equal(store.getState().email, 'FOO')
  t.end()
})
