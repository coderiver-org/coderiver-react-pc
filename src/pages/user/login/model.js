import { login } from './services'

let count = 0

export default {
  namespace: 'login',
  state: {
    isShowWarnMsg: false,
    isShowPassword: false,
    isShowAuthCode: false,
    username: '',
    password: '',
    authCode: ''
  },
  reducers: {
    switchShowPassword(state) {
      return { ...state, isShowPassword: !state.isShowPassword }
    },
    changeUserName(state, { e }) {
      return { ...state, username: e.target.value }
    },
    changePassword(state, { e }) {
      return { ...state, password: e.target.value }
    },
    changeShowAuthCode(state) {
      return { ...state, isShowAuthCode: true }
    }
  },
  effects: {
    * login(state, { call, put }) {
      count++
      if (count >= 3) {
        yield put({ type: 'changeShowAuthCode' })
      }
      yield call(login, state.username, state.password, state.authCode)
      // const page = yield select(state => state.data)
    }
  }
}
