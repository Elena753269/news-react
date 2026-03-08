import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import Image from "../Image/Image"
import styles from "./styles.module.scss"

const NewsBanner = ({item}) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.urlToImage}/>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.extra}>{formatTimeAgo(item.publishedAt)} · by {item?.author}</p>
        </div>
    )
}

export default NewsBanner