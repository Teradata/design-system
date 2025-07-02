import React, { useState } from 'react';
import styles from './styles.module.scss';

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

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  selectedLanguage,
  languages,
  onLanguageChange,
  menuPosition,
}) => {
  const [activeLangButton, setActiveLangButton] = useState<boolean>(false);

  const defaultLang = languages?.find(
    (lang) => lang.value === selectedLanguage,
  );

  const [activeLang, setActiveLang] = useState<Language | null>(
    defaultLang || null,
  );

  const handleLangButtonClick = () => {
    setActiveLangButton(!activeLangButton);
  };

  const handleLangOptionClick = (language: Language) => {
    setActiveLang(language);
    if (onLanguageChange) {
      onLanguageChange(language.value);
    }
    handleLangButtonClick();
  };

  return (
    <div
      className={`${styles.languageSelectorWrapper} ${
        activeLangButton ? styles.active : ''
      }`}
    >
      <button
        aria-label="Click or press enter to open menu"
        tabIndex={0}
        aria-haspopup="true"
        className={`${styles.languageSelectorToggle} ${styles.selected}`}
        onClick={handleLangButtonClick}
      >
        {activeLang?.label}
      </button>
      <ul
        className={`${styles.languageSelector} ${
          menuPosition === 'top' ? styles.top : ''
        }`}
        role="menu"
      >
        {languages.map((lang, index) => (
          <li
            className={`${styles.languageOption} ${
              lang.value === activeLang?.value ? styles.active : ''
            }`}
            onClick={() => handleLangOptionClick(lang)}
            tabIndex={0}
            key={index}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

LanguageDropdown.displayName = 'LanguageDropdown';

export default LanguageDropdown;
