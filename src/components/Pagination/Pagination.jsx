import styles from './styles.module.scss';

const Pagination = ({ totalPages, currentPage, setCurrentPage}) => {
    const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={handlePreviousPage} disabled={currentPage === 1}>{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={
              index + 1 === currentPage
                ? `${styles.pageNumber} ${styles.isActive}`
                : styles.pageNumber
            }
            onClick={() => handlePageClick(index + 1)}
            disabled={index + 1 === currentPage}
            >
            {index + 1}
          </button>
        ))}
      </div>
      <button className={styles.arrow} onClick={handleNextPage} disabled={currentPage === totalPages}>{'>'}</button>
    </div>
  );
};

export default Pagination;
