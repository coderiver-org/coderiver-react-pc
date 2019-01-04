import { Model } from 'src/typing';

type S = {
  test: number;
};

export default ((): Model<S> => {
  return {
    namespace: 'globalModel',

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
        yield put({ type: 'save' });
        if (callback) callback();
      },
    },

    reducers: {
      save({ state, action }) {
        return { ...state, ...action.payload };
      },
    },
  };
})();
