import React from 'react';
import { FormatVND } from '../../../share/utils/formater';
import styles from './CartTotal.module.scss'

export type CartTotalType = {
    totalItems?: number,
    totalPrice?: number
}

const CartTotal: React.FC<CartTotalType> = ({ totalItems = 0, totalPrice = 0 }) => {
    return (
        <div className={`mx-3 py-3 ${styles.wrap}`}>
            <div className='d-flex align-item-center justify-content-between'>
                <p className='mb-1'>Tạm tính</p>
                <p className='mb-1'>{FormatVND(totalPrice)} VND</p>
            </div>
            <div className='d-flex align-item-center justify-content-between'>
                <p className='mb-1'>Giảm giá</p>
                <p className='mb-1'>0 VND</p>
            </div>
            <div className='d-flex align-item-center justify-content-between'>
                <h6 >Tổng tiền</h6>
                <h6 >{FormatVND(totalPrice)} VND</h6>
            </div>
        </div>
    );
};

export default CartTotal;
