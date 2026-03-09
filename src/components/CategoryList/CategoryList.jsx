import styles from './styles.module.scss';

const CategoryList = ({ categories, setCategory, currentCategory, setCurrentPage }) => {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li>
          <button
            key={category}
            className={category === currentCategory ? `${styles.button} ${styles.isActive}` : styles.button}
            onClick={() => {
              setCategory(category);
              setCurrentPage(1);
            }}>
            {category[0].toUpperCase() + category.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
