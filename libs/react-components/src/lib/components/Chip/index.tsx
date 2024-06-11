import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface ChipProps {
  /**
   * Label displayed in the chip.
   */
  label: string;
  /**
   * Click handler for the chip.
   */
  onClick?: () => void;
  /**
   * Whether the chip is selectable.
   */
  selectable?: boolean;
  /**
   * Whether the chip is selected.
   */
  selected?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  label = '',
  onClick,
  selectable = false,
  selected = false,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(selectable && selected);

  const handleClick = () => {
    if (selectable) {
      setIsSelected(!isSelected);
      if (onClick) onClick();
    }
  };

  useEffect(() => {
    if (selectable) setIsSelected(selected);
  }, [selectable, selected]);

  return (
    <div
      className={`${styles.chip} ${isSelected ? styles.selected : ''} ${
        selectable ? styles.selectable : ''
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Chip;
