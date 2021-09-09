import React from "react";
import Image from "../../atoms/image";
import styles from "./orderCardItem.module.scss";

type OrderCardItemProps = {};

const OrderCard: React.FC<OrderCardItemProps> = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.deliveryStatus}>Giao hàng thành công</p>
            <hr />
            <div className={styles.card}>
                <div className={styles.content}>
                    <div>
                        <Image
                            src="icons/random.jpg"
                            className={styles.avatar}
                        />
                    </div>
                    <div className={styles.title}>
                        <p className={styles.name}>
                            Nồi đúc ceramic cao cấp 2 tay cầm 24cm, dùng được
                            bếp từ - Hồng
                        </p>
                        <p className={styles.price}>
                            <span>1 sản phẩm </span>|<span> 363.000đ</span>
                        </p>
                    </div>
                </div>
                <div className={`row ${styles.CTAbtn}`}>
                    <div className="col-6 ">
                        <button
                            className={`btn btn-outline-success w-100 d-flex justify-content-center align-items-center ${styles.detailCTA}`}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                    <div className="col-6">
                        <button
                            className={`btn btn-outline-success w-100 d-flex justify-content-center align-items-center ${styles.buyBackCTA}`}
                        >
                            Mua lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
