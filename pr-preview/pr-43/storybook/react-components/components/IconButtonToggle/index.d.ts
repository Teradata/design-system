import { default as React } from '../../../../../../node_modules/react';

interface IconButtonToggleProps {
    /**
     * Icon to be displayed in the button
     */
    offIcon?: string;
    /**
     * Icon to be displayed in the button
     */
    onIcon?: string;
    /**
     * Aria label for the icon button
     */
    ariaLabel?: string;
    /**
     * Whether the button has any associated popup elements
     */
    ariaHasPopup?: boolean;
    /**
     * Whether the icon button is disabled
     */
    disabled?: boolean;
    /**
     * Click handler for the button
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Whether the icon button is toggled on
     */
    toggledOn?: boolean;
}
export declare const IconButtonToggle: React.FC<IconButtonToggleProps>;
export default IconButtonToggle;
