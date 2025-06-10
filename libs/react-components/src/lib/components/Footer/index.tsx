import React, { useState } from 'react';
import styles from './styles.module.scss';
import externalLinkIcon from '../../assets/external-link.svg';
import { SvgIcon } from '../SvgIcon';

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
    external?: boolean;
    label?: string;
  }[];
};

interface FooterProps {
  /**
   * List of links to be displayed in the footer.
   */
  links?: FooterLink[];
  /**
   * Copyright text.
   */
  copyright?: string;
  /**
   * List of social links.
   */
  socialLinks?: SocialLinks;
  /**
   * List of the legal links.
   */
  legalLinks?: FooterNavLink[];
  /**
   * Links of interest to be displayed on top of the footer.
   */
  linksOfInterest?: FooterLink;
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
      <a
        href={href}
        className={styles.footerNavLink}
        target={external ? '_blank' : '_self'}
        rel="noreferrer"
      >
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
  linksOfInterest,
}) => {
  return (
    <>
      {linksOfInterest && (
        <section className={styles.linksOfInterest}>
          <div className={styles.linksOfInterestTitle}>
            {linksOfInterest.title}
          </div>
          <ul>
            {linksOfInterest.items.map((item, index) => (
              <li className={styles.linkOfInterest} key={index}>
                <a
                  className={styles.footerNavLink}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
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
            <div
              className={`${styles.footerLink} ${styles.socialLinksWrapper}`}
            >
              <div className={styles.footerLinkTitle}>{socialLinks.title}</div>
              <ul className={styles.socialLinksList}>
                {socialLinks.items?.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      aria-label={`Social Link${item.label ? `- ${item.label}` : ''}`}
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      <SvgIcon iconName={item.icon} size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <section
          className={`${styles.containerWide} ${styles.copyrightWrapper}`}
        >
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
    </>
  );
};

Footer.displayName = 'Footer';

export default Footer;
