import { default as React } from 'react';

interface IconButtonProps {
    /**
     * Icon to be displayed in the button
     */
    icon?: string;
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
     * The slot it should be added in when used inside a litjs component
     */
    slot?: string;
    /**
     * Click handler for the button
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
