import { AddCartBtn } from './Components';
import styles from './Description.module.css';

const Description = () => {
    return(
        <div className={styles.descriptionContent}>
            <h5 className={styles.perfume}>perfume</h5>
            <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
            <h6 className={styles.description}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</h6>
            <div className={styles.priceContent}>
                <h1 className={styles.price}>$149.99</h1>
                <h5 className={styles.backPrice}>$169.00</h5>
            </div>
            <AddCartBtn></AddCartBtn>
        </div>
    )
};

export default Description;