import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TypographyProps {
  /**
   * Scale or type of the text.
   */
  scale:
    | 'body1'
    | 'body2'
    | 'body3'
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'caption'
    | 'eyebrow';
  alignment: 'center' | 'left' | 'right';  
  children?: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  scale = 'body1',
  alignment = 'center',
  children,
}) => {
  return (
    <slot className={`${styles[scale]} ${alignment && scale === 'eyebrow' ? styles[alignment] : 'center'} ${styles.typography}`}>{children}</slot>
  );
};

Typography.displayName = 'Typography';

export default Typography;
