import { CovalentIconButton } from '@covalent/components';
import { createComponent } from '@lit/react';
import React from 'react';

interface IconButtonProps {
  /**
   * Icon to be displayed in the button
   */
  icon?: string;
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
   * The slot it should be added in when used inside a litjs component
   */
  slot?: string;
  /**
   * Click handler for the button
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const IconButtonComponent = createComponent({
  tagName: 'cv-icon-button',
  elementClass: CovalentIconButton as never,
  react: React,
});

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  ariaHasPopup,
  disabled,
  slot,
  onClick,
}) => {
  const customProps = {
    icon,
    disabled,
    slot,
    'aria-label': ariaLabel,
    'aria-haspopup': ariaHasPopup,
    onClick,
  };
  return <IconButtonComponent {...customProps}></IconButtonComponent>;
};

export default IconButton;
