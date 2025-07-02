import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface CardProps {
  /**
   * The title of the card
   */
  title: string;
  /**
   * The content of the card
   */
  content: ReactNode;
  /**
   * Alt text for the card image
   */
  imageAltText?: string;
  /**
   * Image position in the card
   */
  imageDirection?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Image to be displayed in the card
   */
  imageSrc?: string;
  /**
   * Image width for 'left', 'right' image orientations
   */
  imageWidth?: string;
}

const Card: React.FC<CardProps> = ({
  content,
  imageAltText,
  imageDirection = 'left',
  imageSrc,
  imageWidth = '350px',
  title,
}) => {
  return (
    <div className={`${styles.card} ${styles[imageDirection]}`}>
      {imageSrc && (
        <div
          className={styles.cardImage}
          style={
            { '--td-web-card-img-width': imageWidth } as React.CSSProperties
          }
        >
          <img src={imageSrc} alt={imageAltText} />
        </div>
      )}
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};

export default Card;
