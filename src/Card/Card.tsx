import { Description, Image } from "./Components";
import styles from './Card.module.css';

const Card = () => {
    return(
        <div className={styles.cardContent}>
            <Image></Image>
            <Description></Description>
        </div>
    )
};

export default Card;