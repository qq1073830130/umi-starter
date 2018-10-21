import styles from './index.scss';
import { connect } from 'dva';

export default connect(({ global }) => ({
  global
}))(function({ dispatch, global }) {
  return (
    <div className={styles.normal}>
      <div>
        name:
        {global.name}
      </div>
      <div>
        age:
        {global.age}
      </div>
      <div>
        signIn:
        {JSON.stringify(global.signIn)}
      </div>
      <button onClick={() => dispatch({ type: 'global/statusChange' })}>
        !signIn
      </button>
      <button onClick={() => dispatch({ type: 'global/queryUser' })}>
        获取用户信息
      </button>
      <button onClick={() => dispatch({ type: 'global/queryUserList' })}>
        获取用户列表
      </button>
    </div>
  );
});
