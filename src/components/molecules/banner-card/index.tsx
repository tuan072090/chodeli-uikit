import React from 'react';
import styles from './BannerCard.module.scss';

type BannerCardType = {
    src: string
}
const BannerCard: React.FC<BannerCardType> = ({ src = '/imgs/banner_example.jpg' }) => {
    return (
        <a className={styles.slideItem}>
            <img src={src} alt="Logo Chợ Deli" width="800" height="264" />
        </a>
    );
};

export default BannerCard;
