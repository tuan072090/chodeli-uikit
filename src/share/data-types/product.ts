import React from "react";
import {CategoryType} from "./category";

export type ProductType = {
    id: number,
    name: string,
    slug: string,
    image: {
        url: string,
        thumb: string
    },
    gallery: string[],
    categories?: any[],
    quantity?: number,
    productItems: ProductItemType[],
    summary?: string
    body?:string
}

export type ProductItemType = {
    id: number,
    name: string,
    sku: string,
    price: number,
    salePrice: number,
    quantity: number,
    available: number,
    sold: number
}

export type OrderProductItemType = {
    id: number,
    productId: number,
    price: number,
    quantity: number,
    name: string,
    image: string
}

export interface ProductCardProps extends React.PropsWithChildren<any> {
    product: ProductType
}
export interface ProductListProps extends React.PropsWithChildren<any> {
    products: ProductType[]|null
    category?: CategoryType|null
}

