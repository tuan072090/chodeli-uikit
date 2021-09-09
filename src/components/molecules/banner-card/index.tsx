import React from 'react';
import styles from './BannerCard.module.scss';

const BannerCard = (props: any) => {
    return (
        <a className={styles.slideItem}>
            <img src="/imgs/banner_example.jpg" alt="Logo Chợ Deli" width="800" height="264"/>
        </a>
    );
};

export default BannerCard;
