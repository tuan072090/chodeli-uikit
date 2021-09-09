import React from "react";
import styles from './image.module.scss';

interface ImageProps extends React.PropsWithChildren<any> {
    src: string
}

const Image: React.FC<ImageProps> = ({ src, ...props }) => {

    return (
        <img src={src} {...props} alt={props.alt} className={`${styles.image} ${props.className}`} loading="lazy" />
    )
}

export default Image
