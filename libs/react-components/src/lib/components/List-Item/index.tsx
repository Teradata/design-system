import { CovalentListItem } from '@covalent/components/list/list-item';
import { createComponent } from '@lit/react';
import React from 'react';
import '@covalent/components/icon';

interface ListProps {
  children: React.ReactNode; 
  /**
   * Sets activated attribute on selected items which provides a focus-persistent highlight.
   */
  activatible: boolean;
  

}
const ListItemComponent = createComponent({
  tagName: 'cv-list-item',
  elementClass: CovalentListItem as never,
  react: React,
});

const ListItem: React.FC<ListProps> = (props) => {
  return (
    <ListItemComponent {...props}></ListItemComponent>
  );
};

ListItem.displayName = 'ListItem';
export default ListItem;
