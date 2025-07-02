import { ReactNode } from '../../../../../../node_modules/react';

interface CardProps {
    /**
     * The title of the card
     */
    title: string;
    /**
     * The content of the card
     */
    content: ReactNode;
    /**
     * Alt text for the card image
     */
    imageAltText?: string;
    /**
     * Image position in the card
     */
    imageDirection?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Image to be displayed in the card
     */
    imageSrc?: string;
    /**
     * Image width for 'left', 'right' image orientations
     */
    imageWidth?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
