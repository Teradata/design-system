import React, { useState } from 'react';
import styles from './styles.module.scss';
import externalLinkIcon from '../../assets/external-link.svg';
import { NavListItem } from '../NavItem';

interface DropdownMenuProps extends React.HTMLProps<HTMLUListElement> {
  navItems: NavListItem[];
}

interface DropdownMenuItemProps extends React.HTMLProps<HTMLLIElement> {
  navItem: NavListItem;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  navItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <li
      className={`${styles.dropdownMenuItem} ${navItem.navItems ? styles.nested : ''}`}
    >
      {navItem.navItems ? (
        <div
          className={styles.dropdownMenuItemLabel}
          onClick={handleNavItemClick}
        >
          <span>{navItem.label}</span>
          <span
            className={`${styles.caret} ${isOpen ? styles.active : ''}`}
          ></span>
        </div>
      ) : (
        <a href={navItem.href} target="_blank" rel="noreferrer">
          {navItem.label}
          {navItem.external && (
            <img
              className={styles.externalLinkImg}
              src={externalLinkIcon}
              alt="External link"
            />
          )}
        </a>
      )}

      {navItem.navItems && isOpen && (
        <DropdownMenu navItems={navItem.navItems} />
      )}
    </li>
  );
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ navItems }) => {
  const renderNavItems = (
    navItems: NavListItem[] | undefined
  ): JSX.Element | null => {
    if (!navItems) return null;

    return (
      <ul className={styles.dropdownMenu}>
        {navItems.map((navItem, index) => (
          <DropdownMenuItem navItem={navItem} key={index} />
        ))}
      </ul>
    );
  };

  return renderNavItems(navItems);
};
