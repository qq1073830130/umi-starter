import { queryUser, queryUserList } from '@/serve/example';

export default {
  state: {
    name: '未登录',
    age: '-',
    signIn: false
  },
  reducers: {
    setState(state, { type, ...payload }) {
      return { ...state, ...payload };
    },
    statusChange(state) {
      return { ...state, signIn: !state.signIn };
    },
    setUserInfo(state, { payload: userInfo }) {
      return { ...state, ...userInfo };
    }
  },
  effects: {
    * queryUser(_, { call, put }) {
      let data = yield call(queryUser);
      console.log(data);
      yield put({
        type: 'setUserInfo',
        payload: data
      });
    },
    * queryUserList(_, { call, put }) {
      let data = yield call(queryUserList);
      console.log(data);
      // yield put({
      //   type: 'setUserInfo',
      //   payload: data
      // });
    }
  },
  subscriptions: {
    setup(subscribe) {
      // console.log(subscribe);
    },
  },
};
