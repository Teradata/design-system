import styles from './styles.module.css';

interface ButtonProps {
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
   * Background color of the button
   */
  backgroundColor?: string;
  /**
   * Click handler for the button
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  primary,
  size,
  backgroundColor,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${styles.tdButton} ${primary ? styles.tdButtonPrimary : styles.tdButtonSecondary} ${size ? `tdButton${size}` : ''}`}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
