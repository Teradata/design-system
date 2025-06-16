import { default as React } from 'react';

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
declare const Alert: React.FC<AlertProps>;
export default Alert;
