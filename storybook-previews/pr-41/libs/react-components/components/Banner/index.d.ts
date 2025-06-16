import { default as React, ReactNode } from 'react';

interface BannerProps {
    /**
     * Content to be displayed in the banner. Accepts any ReactNode.
     */
    content: ReactNode;
    /**
     * Custom styles for the banner image.
     */
    imageClassName?: string;
    /**
     * Source for the banner image.
     */
    imageSrc: string;
    /**
     * Alt text for the banner image.
     */
    imageAltText?: string;
    /**
     * Whether it is a hero banner.
     */
    isHero?: boolean;
    /**
     * Title of the banner.
     */
    title: string;
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
