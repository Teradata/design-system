/// <reference types="react" />
interface BreadcrumbProps {
    /**
     * The items of the breadcrumb
     */
    items: {
        label: string;
        link: string;
    }[];
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
