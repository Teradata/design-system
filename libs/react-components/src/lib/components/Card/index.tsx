import { ReactNode } from 'react';
import styles from './styles.module.css';

interface CardProps {
    /**
     * The title of the card
     */
    title: string;
    /**
     * The content of the card
     */
    content: ReactNode;
}

const Card: React.FC<CardProps> = ({
    title,
    content,
}) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.content}>{content}</div>
        </div>
    );
}

export default Card;