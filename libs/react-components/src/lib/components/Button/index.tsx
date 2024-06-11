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
}

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  primary,
  size,
  trailingIcon,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles.tdButton} ${
        primary ? styles.tdButtonPrimary : styles.tdButtonSecondary
      } ${size ? `tdButton${size}` : ''} ${
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
