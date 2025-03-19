import React, { ReactElement, ReactNode, useState } from 'react';
import Chip from '../Chip';
import ChipSet from '../ChipSet';
import styles from './styles.module.scss';

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

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

const TabBar: React.FC<TabBarProps> = ({
  defaultSelectedIndex = 0,
  children,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  const defaultSelectedTab = children[defaultSelectedIndex].props.label;

  const onTabChange = (selectedTabLabel: string[]) => {
    const selectedIndex = children.findIndex(
      (child) => (child as ReactElement).props.label === selectedTabLabel[0],
    );
    setSelectedIndex(selectedIndex);
  };

  return (
    <div>
      <div className={styles.tabBar}>
        <ChipSet
          onChipSelect={onTabChange}
          defaultSelected={defaultSelectedTab}
          className={styles.chipSet}
        >
          {children.map((child, index) => {
            const { label } = (child as ReactElement<TabProps>).props;
            return <Chip key={index} label={label} selectable={true}></Chip>;
          })}
        </ChipSet>
      </div>
      <div className={styles.tabContent}>
        {children?.length && children[selectedIndex].props.children}
      </div>
    </div>
  );
};

Tab.displayName = 'Tab';
TabBar.displayName = 'TabBar';

export { Tab, TabBar };
