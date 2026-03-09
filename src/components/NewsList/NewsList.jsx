import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.scss';

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item, index) => {
        if (index !== 0) {
          return <NewsItem key={item.url} item={item} />;
        }
      })}
    </ul>
  );
};

export default NewsList;
