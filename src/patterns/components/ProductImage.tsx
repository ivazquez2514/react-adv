import { useContext } from "react";
import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

const ProductImage = () => {
    const { product } = useContext(ProductContext);

    return (
        <img src={product?.img ? product.img : noImage} alt="No available" className={styles.productImg} />
    );
}

export default ProductImage;