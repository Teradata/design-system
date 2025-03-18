import { CovalentList } from '@covalent/components/list';
import { createComponent } from '@lit/react';
import React from 'react';
import '@covalent/components/icon';

interface ListProps {
  /**
   * Whether the list items are activatable
   */
  activatible: boolean;
  /**
   * When true, sets tabindex=0 on the internal list
   */
  rootTabbable: boolean;
  /**
   * When true, enables selection of multiple items
   */
  multi: boolean;
  /**
   * When true, wraps focus between the first and last list item
   */
  wrapFocus: boolean;
  /**
   * When true, disables interaction on the list
   */
  noninteractive: boolean;
  /**
   * Role for the list items
   */
  itemRoles: string;
  /**
   * aria-label for the internal list element
   */
  innerAriaLabel: string;
  /**
   * Role for the internal list element
   */
  innerRole: string;
  /**
   * Children elements to be rendered inside the list
   */
  children?: React.ReactNode;
}

const ListComponent = createComponent({
  tagName: 'cv-list',
  elementClass: CovalentList as never,
  react: React,
});

const List: React.FC<ListProps> = (props) => {
  return <ListComponent {...props} />;
};

List.displayName = 'List';
export default List;
