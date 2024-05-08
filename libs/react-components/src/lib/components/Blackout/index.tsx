import React from 'react';
import styles from './styles.module.css';

interface BlackoutProps {
  /**
   * Whether pageblackout is active
   */
  active: boolean;
  /**
   * Custom css classes to be added
   */
  className?: string;
}

const Blackout: React.FC<BlackoutProps> = ({ active = false, className }) => {
  return (
    <div
      className={`${styles.pageBlackout} ${active ? styles.show : ''} ${className}`}
    ></div>
  );
};

export default Blackout;
