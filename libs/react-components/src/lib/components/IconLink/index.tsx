import React from 'react';
import styles from './styles.module.scss';

import Icon from '../Icon';

interface IconLinkProps {
  /**
   * Font awesome icon name.
   */
  iconName: string;
  /**
   * URL for the link.
   */
  href?: string;
  /**
   * Opens the link in a new tab if true.
   */
  external?: boolean;
  /**
   * Color of the icon.
   */
  color?: string;
  /**
   * Size of the icon in the link.
   */
  size?: number | string;
  /**
   * aria-label for the link.
   */
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
