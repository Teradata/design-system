import { CovalentIconButtonToggle } from '@covalent/components/icon-button-toggle';
import { createComponent } from '@lit/react';
import React from 'react';

interface IconButtonToggleProps {
  /**
   * Icon to be displayed in the button
   */
  offIcon?: string;
  /**
   * Icon to be displayed in the button
   */
  onIcon?: string;
  /**
   * Aria label for the icon button
   */
  ariaLabel?: string;
  /**
   * Whether the button has any associated popup elements
   */
  ariaHasPopup?: boolean;
  /**
   * Whether the icon button is disabled
   */
  disabled?: boolean;
  /**
   * Click handler for the button
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Whether the icon button is toggled on
   */
  toggledOn?: boolean;
}

const IconButtonToggleComponent = createComponent({
  tagName: 'cv-icon-button-toggle',
  elementClass: CovalentIconButtonToggle as never,
  react: React,
});

export const IconButtonToggle: React.FC<IconButtonToggleProps> = ({
  offIcon,
  onIcon,
  ariaLabel,
  ariaHasPopup,
  disabled,
  onClick,
}) => {
  const customProps = {
    offIcon,
    onIcon,
    disabled,
    'aria-label': ariaLabel,
    'aria-haspopup': ariaHasPopup,
    onClick,
  };
  return (
    <IconButtonToggleComponent {...customProps}></IconButtonToggleComponent>
  );
};

IconButtonToggle.displayName = 'IconButtonToggle';

export default IconButtonToggle;
