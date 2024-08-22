import { CovalentDialog } from '@covalent/components/dialog';
import { createComponent } from '@lit/react';
import React from 'react';
interface DialogProps {
  /**
   * Opens the dialog when true
   */
  open: boolean;
  /**
   * Hides the actions footer(Buttons) of the dialog. .
   */
  hideActions: boolean;
  /**
   * Stacks the action buttons.
   */
  stacked: boolean;
  /**
   * Heading text of the dialog
   */
  heading: string;
  /**
   * Setting this attribute to an empty string \"\" will prevent clicks outside the dialog from closing the dialog.
   */
  scrimClickAction: string;
  /**
   * Setting this attribute to an empty string \"\" will prevent the escape key from closing the dialog.
   */
  escapeKeyAction: string;
  /**
   * Action to be emitted with the closing and closed events when <cv-dialog>.open is toggled
   */
  defaultAction: string;
  /**
   * Attribute to read in light dom of dialog for closing action value
   */
  actionAttribute: string;
  /**
   * Attribute to search for in light dom for initial focus on dialog open.
   */
  initialFocusAttribute: string;
}

const DialogComponent = createComponent({
  tagName: 'cv-dialog',
  elementClass: CovalentDialog as never,
  react: React,
});

const Dialog: React.FC<DialogProps> = (props) => {
  return <DialogComponent {...props}></DialogComponent>;
};

Dialog.displayName = 'Dialog';
export default Dialog;
