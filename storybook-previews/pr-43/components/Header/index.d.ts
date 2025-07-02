import { Language } from '../LanguageDropdown';
import { default as React } from '../../../../../../node_modules/react';
import { NavListItem } from '../NavItem';

export type HeaderAction = {
    /**
     * Action element to be added to the header
     */
    actionElement?: React.ReactNode;
    /**
     * Type of action
     */
    type: 'search' | 'button';
};
interface HeaderProps {
    /**
     * Title of the header, displayed after the brand image
     */
    title: string;
    /**
     *  Link associated with the title of the header
     */
    titleLink: string;
    /**
     * Nav items to be displayed in the navbar
     */
    navItems: NavListItem[];
    /**
     * Header action buttons in the header
     */
    headerActions?: HeaderAction[];
    /**
     * Languages supported
     */
    languages?: Language[];
    /**
     * Called on language change
     */
    onLanguageChange?: (language: string) => void;
    /**
     * Value of the default selected language
     */
    selectedLanguage?: string;
    /**
     * Secondary menu content for mobile view
     */
    secondaryMenu?: {
        menuElement: JSX.Element;
        title: string;
    };
    /**
     * Announcement content to be displayed in the header
     */
    announcementContent?: React.ReactNode;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
