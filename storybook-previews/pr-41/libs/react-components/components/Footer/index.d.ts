import { default as React } from 'react';

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
export declare const FooterNavLinkList: React.FC<FooterLink>;
export declare const FooterNavLinkItem: React.FC<FooterNavLink>;
declare const Footer: React.FC<FooterProps>;
export default Footer;
