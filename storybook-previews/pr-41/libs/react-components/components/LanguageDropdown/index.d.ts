import { default as React } from 'react';

export type MenuPosition = 'top' | 'bottom';
export type Language = {
    /**
     * Label displayed for the language
     */
    label: string;
    /**
     * Value of the selected language
     */
    value: string;
};
interface LanguageDropdownProps {
    /**
     * Default selected language.
     */
    selectedLanguage?: string;
    /**
     * List of languages.
     */
    languages: Language[];
    /**
     * Callback for language change.
     */
    onLanguageChange?: (language: string) => void;
    /**
     * Position of the menu. Takes the values 'top' | 'bottom'.
     */
    menuPosition?: MenuPosition;
}
declare const LanguageDropdown: React.FC<LanguageDropdownProps>;
export default LanguageDropdown;
