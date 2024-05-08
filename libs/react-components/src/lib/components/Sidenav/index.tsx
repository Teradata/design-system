import { HTMLProps, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface SidenavProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Whether the sidenav is shown or not
   */
  show?: boolean;
  /**
   * Whether the sidenav pops up from the left
   */
  left?: boolean;
}

const Sidenav: React.FC<SidenavProps> = ({ children, show, left, style }) => {
  return (
    <div
      className={`${styles.sidenav} ${show ? styles.show : ''} ${left ? styles.left : styles.right}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Sidenav;
