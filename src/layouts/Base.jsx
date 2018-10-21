import styles from './index.scss';

import Link from 'umi/link';
import withRouter from 'umi/withRouter';

import QueueAnim from 'rc-queue-anim';

function BasicLayout({ location, ...props }) {
  return (
    <div className={styles.normal}>
      <QueueAnim type={['left', 'right']}>
        <h1 key="a" className={styles.title}>Yay! Welcome to umi!</h1>
        <p key="b">
          <Link to="/user">sign in</Link>
        </p>
        <QueueAnim key="c" type={['left', 'right']}>
          <div key={location.pathname}>{props.children}</div>
        </QueueAnim>
      </QueueAnim>
    </div>
  );
}

export default withRouter(BasicLayout);
