import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import Typography from '../Typography';

interface BannerProps {
  /**
   * Content to be displayed in the banner. Accepts any ReactNode.
   */
  content: ReactNode;
  /**
   * Source for the banner image.
   */
  imageSrc: string;
  /**
   * Alt text for the banner image.
   */
  imageAltText?: string;
  /**
   * Whether it is a hero banner.
   */
  isHero?: boolean;
  /**
   * Title of the banner.
   */
  title: string;
}

const Banner: React.FC<BannerProps> = ({
  content = '',
  imageSrc = '',
  imageAltText = 'Banner Image',
  isHero = false,
  title = '',
}) => {
  return (
    <div className={`${styles.banner} ${isHero ? styles.bannerHero : ''}`}>
      <section className={styles.bannerInfo}>
        <Typography scale={isHero ? 'headline1' : 'headline3'}>
          {title}
        </Typography>
        <Typography scale={isHero ? 'body1' : 'body2'}>
          <div className={styles.bannerContent}>{content}</div>
        </Typography>
      </section>
      <img className={styles.bannerImage} src={imageSrc} alt={imageAltText} />
    </div>
  );
};

export default Banner;
