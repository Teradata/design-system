import React, { ReactNode } from 'react';
import styles from './styles.module.scss';
import Typography from '../Typography';

interface BannerProps {
  /**
   * Content to be displayed in the banner. Accepts any ReactNode.
   */
  content: ReactNode;
  /**
   * Custom styles for the banner image.
   */
  imageClassName?: string;
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
  imageAltText = 'Banner Image',
  imageClassName = '',
  imageSrc = '',
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
      <img
        className={`${styles.bannerImage} ${imageClassName}`}
        src={imageSrc}
        alt={imageAltText}
      />
    </div>
  );
};

Banner.displayName = 'Banner';

export default Banner;
