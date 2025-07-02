import { default as React, ReactNode } from '../../../../../../node_modules/react';

interface SelectProps {
    icon: string;
    titleText: string;
    descriptionText: string;
    state: string;
    inline: boolean;
    children?: ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
