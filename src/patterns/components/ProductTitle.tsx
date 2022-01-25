import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

const ProductTitle = () => {
    const { product } = useContext(ProductContext);
    return (
        <span className={styles.productDescription}>{product?.title}</span>
    );
}

export default ProductTitle;