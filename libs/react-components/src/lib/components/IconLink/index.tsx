import React from 'react';
import styles from './styles.module.scss';

import Icon from '../Icon';

interface IconLinkProps {
  iconName: string;
  href?: string;
  external?: boolean;
  color?: string;
  size?: number | string;
  label?: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  iconName,
  href,
  external = true,
  color = '#fff',
  size = 16,
  label,
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      className={styles.iconLink}
      rel="noreferrer"
      aria-label={`Social Link${label ? `- ${label}` : ''}`}
    >
      <Icon className={iconName} style={{ color, fontSize: size }} />
    </a>
  );
};

export default IconLink;
