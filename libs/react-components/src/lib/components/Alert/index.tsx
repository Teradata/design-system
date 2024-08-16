import { CovalentAlert } from '@covalent/components/alert';
import { createComponent } from '@lit/react';
import React from 'react';
import '@covalent/components/icon';
import styles from './styles.module.scss';

interface AlertProps {
  icon: string;
  titleText: string;
  descriptionText: string;
  state: string;
}
const AlertComponent = createComponent({
  tagName: 'cv-alert',
  elementClass: CovalentAlert as never,
  react: React,
});

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <div className={styles.alertWrapper}>
      <AlertComponent {...props}></AlertComponent>
    </div>
  );
};

Alert.displayName = 'Alert';
export default Alert;