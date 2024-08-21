import { ReactNode, useState } from 'react';
import styles from './styles.module.scss';

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

const ListItem: React.FC<ListItemProps> = ({ label, active, content }) => {
  const [isActive, setActive] = useState(active);
  const hasContent = content !== undefined;
  const contentActiveStyles = isActive ? styles.active : '';
  const activeStyles = isActive ? styles.active : '';

  const toggleActive = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div
        className={`${styles.listItem} ${activeStyles}`}
        onClick={toggleActive}
      >
        {hasContent && (
          <button
            aria-label={`Expand nav category '${label}'`}
            aria-expanded="false"
            type="button"
            className={styles.caret}
          ></button>
        )}
        <span>{label}</span>
      </div>
      {content && (
        <div className={`${styles.content} ${contentActiveStyles}`}>
          {content}
        </div>
      )}
    </>
  );
};

export default ListItem;
