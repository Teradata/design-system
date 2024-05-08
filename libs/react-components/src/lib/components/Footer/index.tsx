import React, { useState } from 'react';
import styles from './styles.module.scss';
import externalLinkIcon from '../../assets/external-link.svg';
import IconLink from '../IconLink';

export type FooterNavLink = {
  label: string;
  href?: string;
  external?: boolean;
};

export type FooterLink = {
  /**
   * Title of the footer link list
   */
  title: string;
  /**
   * Items in the footer link list
   */
  items: FooterNavLink[];
};

export type SocialLinks = {
  /**
   * Title of the social links list
   */
  title: string;
  /**
   * Items in the social links list
   */
  items: {
    icon: string;
    href: string;
    label?: string;
  }[];
};

interface FooterProps {
  links?: FooterLink[];
  copyright?: string;
  socialLinks?: SocialLinks;
  legalLinks?: FooterNavLink[];
}

export const FooterNavLinkList: React.FC<FooterLink> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavListClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.footerLink} ${styles.collapsible}`}>
      <div className={styles.footerLinkTitle} onClick={handleNavListClick}>
        {title}
        <span
          className={`${styles.caret} ${isOpen ? styles.active : ''}`}
        ></span>
      </div>
      {items && (
        <ul className={`${styles.footerLinkList} ${isOpen ? styles.show : ''}`}>
          {items.map((item, index) => (
            <FooterNavLinkItem
              label={item.label}
              href={item.href}
              external={item.external}
              key={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export const FooterNavLinkItem: React.FC<FooterNavLink> = ({
  label,
  href,
  external = false,
}) => {
  return (
    <li className={styles.footerLinkItem}>
      <a href={href} className={styles.footerNavLink}>
        {label}
        {external && (
          <img
            src={externalLinkIcon}
            className={styles.externalIconImg}
            alt={`Link to ${label}`}
          ></img>
        )}
      </a>
    </li>
  );
};

const Footer: React.FC<FooterProps> = ({
  links,
  copyright,
  socialLinks,
  legalLinks,
}) => {
  return (
    <footer className={styles.footer}>
      <section
        className={`${styles.containerWide} ${styles.footerLinksWrapper}`}
      >
        {links &&
          links.map((link, index) => (
            <FooterNavLinkList
              key={index}
              items={link.items}
              title={link.title}
            />
          ))}
        {socialLinks && (
          <div className={`${styles.footerLink} ${styles.socialLinksWrapper}`}>
            <div className={styles.footerLinkTitle}>{socialLinks.title}</div>
            <ul className={styles.socialLinksList}>
              {socialLinks.items?.map((item, index) => (
                <li key={index}>
                  <IconLink
                    iconName={item.icon}
                    href={item.href}
                    size={12}
                    label={item.label}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section className={`${styles.containerWide} ${styles.copyrightWrapper}`}>
        <div className={styles.copyrightLinks}>
          <div className={styles.copyrightText}>&copy;{copyright}</div>
          {legalLinks && (
            <ul className={styles.legalLinksWrapper}>
              {legalLinks.map((item, index) => (
                <FooterNavLinkItem
                  key={index}
                  label={item.label}
                  href={item.href}
                  external={item.external}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
