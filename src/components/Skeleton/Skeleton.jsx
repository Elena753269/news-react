import styles from './styles.module.scss';

const Skeleton = ({ count = 1, type = 'banner' }) => {
    let className = '';

    switch (type) {
        case 'banner':
            className = styles.banner;
            break;
        case 'item':
            className = styles.item;
            break;
         case 'category':
            className = styles.category;
            break;
        default:
            break;
    }
    
  return (
    <>
      {count > 1 ? (
        <ul className={type === 'category' ? styles.list_category : styles.list}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={className}></li>
          ))}
        </ul>
      ) : ( <li className={className}></li> )}
    </>
  );
};

export default Skeleton;
