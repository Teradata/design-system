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
  selectedLanguage?: string;
  languages: Language[];
  onLanguageChange?: (language: string) => void;
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
    (lang) => lang.value === selectedLanguage
  );

  const [activeLang, setActiveLang] = useState<Language | null>(
    defaultLang || null
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
      className={`${styles.languageSelectorWrapper} ${activeLangButton ? styles.active : ''}`}
    >
      <button
        aria-label="Select language"
        aria-controls="languages"
        tabIndex={0}
        aria-haspopup="true"
        className={`${styles.languageSelectorToggle} ${styles.selected}`}
        onClick={handleLangButtonClick}
      >
        {activeLang?.label}
      </button>
      <ul
        className={`${styles.languageSelector} ${menuPosition === 'top' ? styles.top : ''}`}
        id="languages"
      >
        {languages.map((lang, index) => (
          <li
            className={`${styles.languageOption} ${lang.value === activeLang?.value ? styles.active : ''}`}
            onClick={() => handleLangOptionClick(lang)}
            key={index}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDropdown;
