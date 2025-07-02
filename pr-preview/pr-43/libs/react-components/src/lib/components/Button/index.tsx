import Icon from '../Icon';
import styles from './styles.module.css';

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

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  primary,
  variant,
  size,
  trailingIcon,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles.tdButton} ${
        variant === 'text'
          ? styles.tdButtonText
          : primary
            ? styles.tdButtonPrimary
            : styles.tdButtonSecondary
      } ${size ? styles[`tdButton${size}`] : ''} ${
        trailingIcon ? styles.trailingIcon : ''
      }`}
      onClick={onClick}
    >
      {icon && <Icon className={icon} style={{ fontSize: '0.75rem' }} />}
      {label}
    </button>
  );
};

export default Button;
