import { default as React } from 'react';

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
declare const Blackout: React.FC<BlackoutProps>;
export default Blackout;
