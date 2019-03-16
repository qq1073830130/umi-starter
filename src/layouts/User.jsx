import styles from './index.scss';

import Link from 'umi/link';
import withRouter from 'umi/withRouter';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function BasicLayout({ location, ...props }) {
  console.log(location);
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>User</h1>
      <p>
        <Link to="/">to home</Link>
      </p>
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
          <div style={{ position: 'absolute', width: '100%' }}>
            {props.children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(BasicLayout);
