import { login } from './services'

export default {
  namespace: 'login',
  state: {},
  effects: {
    * login({ payload: { username, password } }, { call, select }) {
      yield call(login, username, password)
      // const page = yield select(state => state.data)
    }
  }
}
