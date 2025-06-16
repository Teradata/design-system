/// <reference types="react" />
interface ButtonProps {
    /**
     * Icon to be displayed in the button
     */
    icon?: string;
    /**
     * The label of the button
     */
    label: string;
    /**
     * Primary or secondary button
     */
    primary?: boolean;
    /**
     * Size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Whether the icon is placed in the trailing position
     */
    trailingIcon?: boolean;
    /**
     * Click handler for the button
     */
    onClick?: () => void;
    /**
     * The variant of the button, e.g., 'text'
     */
    variant: string;
    /**
     * The slot it should be added in when used inside a litjs component
     */
    slot?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
