import { NavListItem } from '../NavItem';
import { default as React } from '../../../../../../node_modules/react';

interface DropdownMenuProps extends React.HTMLProps<HTMLUListElement> {
    navItems: NavListItem[];
}
interface DropdownMenuItemProps extends React.HTMLProps<HTMLLIElement> {
    navItem: NavListItem;
}
export declare const DropdownMenuItem: React.FC<DropdownMenuItemProps>;
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export {};
