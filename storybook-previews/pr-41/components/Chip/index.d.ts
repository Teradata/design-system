import { default as React } from '../../../../../../node_modules/react';

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
declare const Chip: React.FC<ChipProps>;
export default Chip;
