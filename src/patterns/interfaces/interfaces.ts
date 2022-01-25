import { ReactElement } from "react";

export interface Product {
    id: number;
    title: string;
    img?: string;
}

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}