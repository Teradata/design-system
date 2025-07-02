import { default as React } from '../../../../../../node_modules/react';

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
declare const IconLink: React.FC<IconLinkProps>;
export default IconLink;
