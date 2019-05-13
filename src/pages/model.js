import { queryIndex } from 'src/services/home';

export default {
  namespace: 'index',

  state: {
    data: {}
  },

  effects: {
    * fetchIndex(_, { call, put }) {
      const response = yield call(queryIndex);
      yield put({
        type: 'saveIndexData',
        payload: response,
      });
    },
  },

  reducers: {
    saveIndexData(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
  },
};