import styles from './styles.module.scss';
import NavItem, { NavListItem } from '../NavItem';
import React, { useState } from 'react';
import { DropdownMenu } from '../DropdownMenu';
import logo from '../../assets/TD-logo.svg';
import closeIcon from '../../assets/close-icon.svg';
import burgerIcon from '../../assets/burger-icon.svg';
import Blackout from '../Blackout';
import Icon from '../Icon';
import Sidenav from '../Sidenav';
import LanguageDropdown, { Language, MenuPosition } from '../LanguageDropdown';

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
  secondaryMenu?: { menuElement: JSX.Element; title: string };
}

const Header: React.FC<HeaderProps> = ({
  title,
  navItems = [],
  languages,
  headerActions,
  onLanguageChange,
  selectedLanguage,
  secondaryMenu,
}) => {
  const [activeNavItem, setActiveNavItem] = useState<number | null>(
    navItems.findIndex((item) => item.active)
  );
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);

  const [pageBlackout, setpageBlackout] = useState<boolean>(false);

  const [activeDocsMenu, setActiveDocsMenu] = useState<boolean>(false);

  const search = headerActions?.find((action) => action.type === 'search');

  const handleNavItemClick = (index: number) => {
    if (navItems[index].navItems) {
      return;
    }
    setActiveNavItem(index);
  };

  const handleMobileMenuClick = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  const handleDocsIconClick = () => {
    setActiveDocsMenu(!activeDocsMenu);
    setpageBlackout(!pageBlackout);
  };

  const isNavItemActive = (index: number) => {
    const isNavMenuOpen = navItems.some((item) => item.isOpen);
    return index === activeNavItem && !isNavMenuOpen;
  };

  const handleNavMenuChange = (index: number, isOpen: boolean): void => {
    if (!isOpen) {
      const prevActiveIndex = activeNavItem;
      const selectedMenuItemIndex =
        navItems[index].navItems?.findIndex((item) => item.active) || null;
      const activeIndex =
        selectedMenuItemIndex !== -1 ? index : prevActiveIndex;
      setActiveNavItem(activeIndex);
    }
    navItems[index].isOpen = isOpen;
    setpageBlackout(navItems.some((item) => item.isOpen));
  };

  const LanguageSelector = ({
    menuPosition = 'bottom',
  }: {
    menuPosition?: MenuPosition;
  }) => {
    return (
      languages && (
        <>
          <li>
            <div className={styles.headerNavVDivider}></div>
          </li>
          <li>
            <LanguageDropdown
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
              menuPosition={menuPosition}
            />
          </li>
        </>
      )
    );
  };

  return (
    <>
      <nav className={`${styles.headerNavWrapper} navbar`}>
        {/* Header utility bar with the language switcher begins */}
        <section className={styles.headerUtility}>
          <div className={styles.containerWide}>
            <ul className={styles.headerUtilityNav}>
              <li>
                <a href="https://teradata.com" target="_self">
                  Teradata.com
                </a>
              </li>

              <LanguageSelector />
            </ul>
          </div>
        </section>
        {/* Header utility bar with the language switcher ends */}

        {/* Header navbar begins */}
        <section id="site-header" className={styles.siteHeader}>
          {/* Desktop navbar begins */}
          <header className={`${styles.headerNav} ${styles.containerWide}`}>
            <nav>
              <div className={styles.headerNavElement}>
                <a
                  className={styles.headerNavLogo}
                  href="https://www.teradata.com/"
                  target="_self"
                >
                  <img
                    className={styles.teradataLogo}
                    src={logo}
                    alt="Teradata Logo"
                  />
                  {title && (
                    <span className={styles.headerNavLogoText}>{title}</span>
                  )}
                </a>
              </div>
              {navItems && (
                <div className={styles.headerNavElement}>
                  <ul className={styles.headerNavMainMenu}>
                    {navItems.map((item, index) => (
                      <NavItem
                        active={isNavItemActive(index)}
                        href={item.href}
                        key={index}
                        onClick={() => handleNavItemClick(index)}
                        onMenuChange={(isOpen) =>
                          handleNavMenuChange(index, isOpen)
                        }
                        nestedNavItems={item.navItems}
                        label={item.label}
                      ></NavItem>
                    ))}
                  </ul>
                </div>
              )}

              <ul
                className={`${styles.headerNavActions} ${styles.headerNavElement}`}
              >
                {headerActions &&
                  headerActions.map((action, index) => (
                    <li key={index} className={styles.headerNavActionItem}>
                      {action.actionElement}
                    </li>
                  ))}
              </ul>
            </nav>
          </header>
          {/* Desktop navbar ends */}

          {/* Mobile navbar begins */}
          <header className={styles.headerNavMobile}>
            <nav>
              <section className={styles.headerNavMobileWrapper}>
                <a
                  className={styles.headerNavLogo}
                  href="http://developers.teradata.com/"
                  target="_self"
                >
                  <img
                    className={styles.teradataLogo}
                    src={logo}
                    alt="Teradata Logo"
                  />
                  <span className={styles.headerNavMobileLogoText}>
                    {title}
                  </span>
                </a>
                <ul className={styles.headerNavMobileTopLinks}>
                  {search && <li>{search.actionElement}</li>}
                  <li>
                    <button
                      id="showMenu"
                      aria-label="Click or Press enter to open menu"
                      tabIndex={0}
                      className={styles.headerNavMobileMenuIcon}
                      onClick={handleMobileMenuClick}
                    >
                      <img
                        src={activeMobileMenu ? closeIcon : burgerIcon}
                        alt="Mobile Menu"
                      />
                    </button>
                  </li>
                </ul>
              </section>
              {secondaryMenu?.menuElement && (
                <section className={styles.headerNavMobileSecondaryMenu}>
                  <span onClick={handleDocsIconClick}>
                    <Icon
                      className={`fa-sharp fa-regular fa-rectangle-list ${styles.headerNavMobileIcon}`}
                    />
                  </span>
                </section>
              )}
            </nav>
            <aside>
              <Sidenav
                show={activeDocsMenu}
                left
                style={
                  secondaryMenu?.menuElement ? { paddingTop: '6.5rem' } : {}
                }
              >
                <div>
                  <div className={styles.sidenavHeader}>
                    <h3>{secondaryMenu?.title}</h3>
                    <img
                      src={closeIcon}
                      onClick={handleDocsIconClick}
                      alt="Docs Menu"
                    />
                  </div>
                  <div className={styles.sidenavContent}>
                    {secondaryMenu?.menuElement}
                  </div>
                </div>
              </Sidenav>
            </aside>
            <section id="mobile-slide">
              {/* Start Responsive NavBar */}
              <Sidenav
                show={activeMobileMenu}
                style={{
                  width: '100%',
                  paddingTop: secondaryMenu?.menuElement ? '6.5rem' : '3.5rem',
                }}
              >
                <div className={styles.headerNavMobileDropdownMenu}>
                  <DropdownMenu navItems={navItems}></DropdownMenu>
                </div>

                <footer>
                  <div className={styles.headerNavMobileFooter}>
                    <ul>
                      <li>
                        <a
                          href="https://teradata.com"
                          target="_self"
                          rel="noopener"
                        >
                          Teradata.com
                        </a>
                      </li>
                      <LanguageSelector menuPosition="top" />
                    </ul>
                  </div>
                </footer>
              </Sidenav>
            </section>
          </header>
          {/* Mobile navbar begins */}
        </section>
        {/* Header navbar ends */}
      </nav>
      <Blackout
        active={activeMobileMenu || pageBlackout}
        className={`${activeMobileMenu ? styles.activeMobileMenu : ''} ${
          styles.pageBlackout
        }`}
      />
    </>
  );
};

export default Header;
