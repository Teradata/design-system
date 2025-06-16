import { HTMLProps, PropsWithChildren } from '../../../../../../node_modules/react';

interface SidenavProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
    /**
     * Whether the sidenav is shown or not
     */
    show?: boolean;
    /**
     * Whether the sidenav pops up from the left
     */
    left?: boolean;
}
declare const Sidenav: React.FC<SidenavProps>;
export default Sidenav;
