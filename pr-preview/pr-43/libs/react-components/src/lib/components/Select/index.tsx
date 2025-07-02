import { CovalentSelect } from '@covalent/components/select';
import { createComponent } from '@lit/react';
import React, { ReactNode } from 'react';
import '@covalent/components/icon';

interface SelectProps {
  icon: string;
  titleText: string;
  descriptionText: string;
  state: string;
  inline: boolean;
  children?: ReactNode;
}

const SelectComponent = createComponent({
  tagName: 'cv-select',
  elementClass: CovalentSelect as never,
  react: React,
});

const Select: React.FC<SelectProps> = (props) => {
  return <SelectComponent {...props}>{props.children}</SelectComponent>;
};

Select.displayName = 'Select';
export default Select;
