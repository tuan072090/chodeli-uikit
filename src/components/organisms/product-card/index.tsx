import React, {useState} from "react";
import {ProductCardProps} from "./ProductCard.type";
import styles from './ProductCard.module.scss';
import Image from '../../atoms/image';
import {FormatVND} from "../../../share/utils/formater";
import {OrderProductItemType} from "../../../share/data-types/product";
import Button from "../../atoms/button";
import QuantityInput from "../../molecules/quantity-input";

const ProductCard:React.FC<ProductCardProps> = ({image, title, description, price, salePrice}) => {
    const [itemsSelected, setItemsSelected] = useState<OrderProductItemType | null>(null);
    const [animation, setAnimation] = useState(false);

    const _addCart = (quantity: number) => {
        setAnimation(!animation);
        setTimeout(() => {
            setAnimation(false);
        }, 1000);
    };

    const _handleQuantityChange = (quantity: number) => {
        if (quantity === 0) {
            setItemsSelected(null);
        } else {
            setItemsSelected(null);
        }
    }

    return(
        <div className={`${styles.productCardList} py-3`}>
            <div className="row d-flex justify-content-between ">
                {
                    image ? <div className={`col-3`}>
                        {
                            animation && (
                                <Image className={`${styles.image} ${styles.moveDisc} ${styles.animation}`} src={image}
                                />
                            )}
                        <Image className={`${styles.image}`} src={image}/>
                    </div> : null
                }
                <div className={`col-9 d-flex flex-column align-content-between`}>
                    <h6>{title}</h6>

                    <div className="d-flex align-items-center">
                        <p className="text-primary fs-5">{FormatVND(salePrice)} VNĐ</p>
                        &nbsp;&nbsp;
                        {salePrice ? (
                            <p className="text-muted text-decoration-line-through fs-6">
                                {FormatVND(price) + " VNĐ"}
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>

            <div className={`row d-flex justify-content-between align-items-center`}>
                <div className="col-8">
                    <p className="text-muted mb-0 pt-2 fs-6 text-overflow-hidden">
                        {description}
                    </p>
                </div>
                <div className="col-4 text-end">
                    {!itemsSelected ? (
                        <Button
                            text="Chọn mua"
                            onClick={() => _addCart(1)}
                            status="primary"
                            size="small"
                        />
                    ) : (
                        <QuantityInput
                            quantity={itemsSelected.quantity}
                            onChange={_handleQuantityChange}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard
