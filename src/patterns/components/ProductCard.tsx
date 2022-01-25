import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Props, ProductContextProps } from '../interfaces/interfaces';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductButtons from './ProductButtons';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext

export const ProductCard = ({ product, children }: Props) => {
    const { counter, increaseBy } = useProduct();
    
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;