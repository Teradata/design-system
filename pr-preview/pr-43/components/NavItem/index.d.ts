/// <reference types="react" />
export type NavListItem = {
    /**
     * Whether the link is active or inactive
     */
    active?: boolean;
    /**
     * Navigation url for the list item
     */
    href?: string;
    /**
     * Label to be displayed for the list item
     */
    label: string;
    /**
     * Nested navigation items
     */
    navItems?: NavListItem[];
    /**
     * Whether the link is external or internal
     */
    external?: boolean;
    /**
     * Link to internal docusaurus page
     */
    to?: string;
    /**
     * Whether the navItem menu is open
     */
    isOpen?: boolean;
};
interface NavItemProps extends React.PropsWithChildren, NavListItem {
    /**
     * Nested nav item links
     */
    nestedNavItems?: NavListItem[];
    /**
     * Called on click of the nav list item
     */
    onClick: () => void;
    /**
     * Called when nav menu is opened or closed
     */
    onMenuChange?: (isOpen: boolean) => void;
}
declare const NavItem: React.FC<NavItemProps>;
export default NavItem;
