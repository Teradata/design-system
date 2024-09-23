import { CovalentAlert } from '@covalent/components/alert';
import { createComponent } from '@lit/react';
import React from 'react';
import '@covalent/components/icon';

interface AlertProps {
  /**
   * Icon of the alert
   */
  icon: string;
  /**
   * Title of the alert
   */
  titleText: string;
  /**
   * Description of the alert
   */
  descriptionText: string;
  /**
   * State of the button
   */
  state: string;
  /**
   * Whether the alert should be inline with it's container
   */
  inline: boolean;
}
const AlertComponent = createComponent({
  tagName: 'cv-alert',
  elementClass: CovalentAlert as never,
  react: React,
});

const Alert: React.FC<AlertProps> = (props) => {
  return <AlertComponent {...props}></AlertComponent>;
};

Alert.displayName = 'Alert';
export default Alert;
