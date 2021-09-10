import {ProductType} from "../../../share/data-types";

export interface ProductCardProps {
    image?: string,
    title: string,
    description?:string,
    price:number
    salePrice?:number
    onClick?:() =>void,
    onCTAClick?:()=>void
}
