import { CovalentListItem } from '@covalent/components/list-item';
import { createComponent } from '@lit/react';
import React from 'react';
import '@covalent/components/icon';

interface ListItemProps {
  /**
   * Value associated with this list item
   */
  value?: string;
  /**
   * Used to group items together
   */
  group?: string;
  /**
   * Reflects tabindex and sets internal tab indices.
   */
  tabindex?: number;
  /**
   * Reflects disabled and sets internal disabled attributes.
   */
  disabled?: boolean;
  /**
   * Activates the two-line variant and enables the secondary slot.
   */
  twoline?: boolean;
  /**
   * Activates focus-persistent ripple.
   */
  activated?: boolean;
  /**
   * Determines which graphic layout to show and enables the graphic slot.
   */
  graphic?: string;
  /**
   * Allows arbitrary width for multiple slotted graphics.
   */
  multipleGraphics?: boolean;
  /**
   * Activates the meta layout tile and enables the meta slot.
   */
  hasMeta?: boolean;
  /**
   * Disables focus and pointer events for the list item.
   */
  noninteractive?: boolean;
  /**
   * Denotes that the list item is selected.
   */
  selected?: boolean;
  children?: React.ReactNode;
}
const ListItemComponent = createComponent({
  tagName: 'cv-list-item',
  elementClass: CovalentListItem as never,
  react: React,
});

const CvListItem: React.FC<ListItemProps> = (props) => {
  return <ListItemComponent {...props}></ListItemComponent>;
};

CvListItem.displayName = 'CvListItem';
export default CvListItem;
