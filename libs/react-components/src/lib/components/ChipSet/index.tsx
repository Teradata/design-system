import React, {
  HTMLProps,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styles from './styles.module.scss';
import Chip from '../Chip';

interface ChipSetProps extends HTMLProps<HTMLDivElement> {
  /**
   * Child nodes or children passed to the ChipSet.
   */
  children?: ReactNode;
  /**
   * Default selected chip.
   */
  defaultSelected?: string;
  /**
   * Whether multiple chips can be selected.
   */
  multiSelect?: boolean;
  /**
   * Callback when a chip/chips are selected.
   */
  onChipSelect: (selectedChipLabels: string[]) => void;
  /**
   * Whether the chips in the ChipSet are selectable.
   */
  selectable?: boolean;
}

const ChipSet: React.FC<ChipSetProps> = ({
  children,
  className = '',
  defaultSelected,
  multiSelect = false,
  onChipSelect,
  selectable = true,
}) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleChipClick = (chipLabel: string) => {
    let updatedSelectedChips = selectedChips;

    if (multiSelect) {
      updatedSelectedChips = selectedChips.includes(chipLabel)
        ? selectedChips.filter((selectedChip) => selectedChip !== chipLabel)
        : [...selectedChips, chipLabel];
    } else if (!selectedChips.includes(chipLabel)) {
      updatedSelectedChips = [chipLabel];
    }

    setSelectedChips(updatedSelectedChips);
    onChipSelect(updatedSelectedChips);
  };

  // Filter out non-Chip elements and render only Chip components
  const chips = React.Children.toArray(children).filter(
    (child) => (child as ReactElement).type === Chip,
  );

  useEffect(() => {
    // Set the default selected chip when the component mounts
    if (defaultSelected) {
      setSelectedChips([defaultSelected]);
    }
  }, [defaultSelected]);

  return (
    <div className={`${styles.chipSet} ${className}`}>
      {chips.map((chip) => {
        const { label } = (chip as ReactElement).props;
        return (
          <Chip
            label={label}
            onClick={() => handleChipClick(label)}
            selectable={selectable}
            key={`${label}-${selectedChips.includes(label)}`}
            selected={selectedChips.includes(label)}
          ></Chip>
        );
      })}
    </div>
  );
};

ChipSet.displayName = 'ChipSet';

export default ChipSet;
