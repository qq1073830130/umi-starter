import styles from './index.scss';

import Link from 'umi/link';
import withRouter from 'umi/withRouter';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function BasicLayout({ location, ...props }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <p>
        <Link to="/user">sign in</Link>
      </p>
        
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
          {props.children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(BasicLayout);
