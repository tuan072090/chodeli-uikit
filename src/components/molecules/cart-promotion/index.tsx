import React from "react";

const CartPromotion = () => {
    return (
        <div className={`mx-3 py-3 `}>
            <h3 >Khuyễn mãi</h3>
            <p className='mb-1'>Nhập mã khuyễn mãi</p>
            <div className="row ">
                <div className="col-8">
                    <input className="form-control" placeholder="Mã" />
                </div>
                <div className="col-4 d-flex align-content center">
                    <button className="btn btn-outline-primary w-100 ">Áp dụng</button>
                </div>
            </div>
        </div>
    );
};

export default CartPromotion;
