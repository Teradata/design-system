import { default as React, ReactNode } from '../../../../../../node_modules/react';

interface TabProps {
    /**
     * Whether the tab is active or inactive
     */
    isSelected?: boolean;
    /**
     * Click handler for the tab
     */
    onClick?: () => void;
    /**
     * Child nodes passed to the tab
     */
    children: ReactNode;
    /**
     * Label associated to the tab
     */
    label: string;
}
interface TabBarProps {
    /**
     * Index of the tab to be selected by default
     */
    defaultSelectedIndex?: number;
    /**
     * Tabs passed as child nodes to the TabBar
     */
    children: React.ReactElement<TabProps>[];
}
declare const Tab: React.FC<TabProps>;
declare const TabBar: React.FC<TabBarProps>;
export { Tab, TabBar };
