import React from "react";
import styles from './image.module.scss';
import {ImageProps} from "./Image.type";

const Image: React.FC<ImageProps> = ({ src, ...props }) => {

    return (
        <img src={src} {...props} alt={props.alt} className={`${styles.image} ${props.className}`} loading="lazy" />
    )
}

export default Image
