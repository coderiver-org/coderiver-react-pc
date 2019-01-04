import { Model } from 'src/typing';
import { queryTest } from 'src/pages/display/service/displayService';

// type S = {
//   test: number;
// };

export default ((): Model<any> => {
  return {
    namespace: 'displayModel',

    state: {
      test: 0,
    },

    subscriptions: {
      setup({ dispatch, history }) {
        // eslint-disable-line
      },
    },

    effects: {
      *fetch({ payload, callback }, { call, put }) {
        // eslint-disable-line
        const res = yield call(queryTest);
        console.log(res);
        yield put({
          type: 'save',
          payload: {
            test: res,
          },
        });
        if (callback) callback();
      },
    },

    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  };
})();
