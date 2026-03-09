import styles from './styles.module.scss';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import CategoryList from '../../components/CategoryList/CategoryList';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('technology');
  const [totalPages, setTotalPages] = useState(1);
  const categories = [
    'technology',
    'sports',
    'science',
    'health',
    'general',
    'entertainment',
    'business',
  ];
  const pageSize = 10;

  const fetchNews = async (curPage, curCategory) => {
    try {
      setIsLoading(true);

      const response = await getNews(curPage, pageSize, curCategory);
      setNews(response.articles);

      setTotalPages(response.totalResults > 100 ? 10 : Math.ceil(response.totalResults / pageSize));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage, currentCategory);
  }, [currentPage, currentCategory]);

  return (
    <main className={styles.main}>
      {!isLoading ? (<CategoryList
        categories={categories}
        setCategory={setCurrentCategory}
        currentCategory={currentCategory}
        setCurrentPage={setCurrentPage}
      />) : (
        <Skeleton count={5} type="category" />
      )}

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type="banner" />
      )}

      {!isLoading && totalPages > 1 ? (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}

      {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}

      {!isLoading && totalPages > 1 ? (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </main>
  );
};

export default Main;
