import { default as React } from '../../../../../../node_modules/react';

export interface SvgIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    iconName: string;
    defaultPath?: string;
}
export declare const SvgIcon: React.FC<SvgIconProps>;
