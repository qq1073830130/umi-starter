import styles from './index.scss';

import Link from 'umi/link';
import withRouter from 'umi/withRouter';

import QueueAnim from 'rc-queue-anim';

function BasicLayout({ location, ...props }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>User</h1>
      <p><Link to="/">to home</Link></p>
      <QueueAnim type={['left', 'right']}>
        <div style={{ position: 'absolute', width: '100%' }} key={location.pathname}>{props.children}</div>
      </QueueAnim>
    </div>
  );
}

export default withRouter(BasicLayout);
