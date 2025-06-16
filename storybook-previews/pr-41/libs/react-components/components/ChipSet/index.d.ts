import { default as React, HTMLProps, ReactNode } from 'react';

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
declare const ChipSet: React.FC<ChipSetProps>;
export default ChipSet;
