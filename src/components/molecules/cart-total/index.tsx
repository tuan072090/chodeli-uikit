import React from 'react';
import styles from './CartTotal.module.scss'

type CartTotalType = {
    totalItems?: number,
    totalPrice?: number
}

const CartTotal: React.FC<CartTotalType> = ({ totalItems = 0, totalPrice = 0 }) => {
    return (
        <div className={`mx-3 py-3 ${styles.wrap}`}>
            <div className='d-flex align-item-center justify-content-between'>
                <p className='mb-1'>Tạm tính</p>
                <p className='mb-1'>{totalPrice} VND</p>
            </div>
            <div className='d-flex align-item-center justify-content-between'>
                <p className='mb-1'>Giảm giá</p>
                <p className='mb-1'>0 VND</p>
            </div>
            <div className='d-flex align-item-center justify-content-between'>
                <h6 >Tổng tiền</h6>
                <h6 >{totalPrice} VND</h6>
            </div>
        </div>
    );
};

export default CartTotal;
