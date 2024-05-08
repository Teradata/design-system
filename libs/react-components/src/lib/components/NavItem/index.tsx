import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import externalLinkIcon from '../../assets/external-link.svg';

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

const NavItem: React.FC<NavItemProps> = ({
  active = false,
  href,
  nestedNavItems = [],
  label,
  onClick,
  onMenuChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the menu
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Function to handle click of the nav item
  const handleClick = () => {
    if (nestedNavItems.length) {
      setIsOpen(!isOpen);
    }
    onClick();
  };

  // Function to handle click of nested nav items in the menu
  const handleNestedNavItemClick = (item: NavListItem) => {
    nestedNavItems.forEach((nestedItem) => {
      nestedItem.active = false;
    });
    item.active = true;
  };

  useEffect(() => {
    if (nestedNavItems.length) {
      document.body.addEventListener('click', handleClickOutside);
      // Cleanup the event listener when the component unmounts
      return () => {
        document.body.removeEventListener('click', handleClickOutside);
      };
    }
  }, [nestedNavItems]);

  useEffect(() => {
    if (onMenuChange) {
      onMenuChange(isOpen);
    }
  }, [isOpen, onMenuChange]);

  return (
    <li>
      {nestedNavItems.length ? (
        <div ref={menuRef} className={styles.navItemWrapper}>
          <div
            className={`${styles.navItemLink} ${isOpen ? styles.isOpen : ''} ${
              active ? styles.active : ''
            }`}
            onClick={handleClick}
          >
            {label}
          </div>
          {isOpen && (
            <div className={styles.navItemMenu}>
              <ul>
                {nestedNavItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleNestedNavItemClick(item)}
                  >
                    <a
                      href={item.href}
                      target="_self"
                      className={`${item.external ? styles.externalLink : ''} ${
                        item.active ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </a>
                    {item.external && (
                      <img
                        className={styles.externalLinkImg}
                        src={externalLinkIcon}
                        alt="External link"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <a
          href={href}
          target="_self" // TODO: remove this
          className={`${styles.navItemLink} ${active ? styles.active : ''}`}
          onClick={handleClick}
        >
          {label}
        </a>
      )}
    </li>
  );
};

export default NavItem;
