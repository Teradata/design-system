import styles from './styles.module.scss';

interface BreadcrumbProps {
  /**
   * The items of the breadcrumb
   */
  items: { label: string; link: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
