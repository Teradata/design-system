import { ReactNode } from '../../../../../../node_modules/react';

interface ListItemProps {
    /**
     * The label of the list item
     */
    label: string;
    /**
     * Whether the list item is active or not
     */
    active?: boolean;
    /**
     * The content of the list item
     */
    content: ReactNode;
}
declare const ListItem: React.FC<ListItemProps>;
export default ListItem;
