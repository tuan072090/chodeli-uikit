import React from 'react';


export type InfoRecipType = {
    fullname?: String,
    promotion?: string,
    methot?: string,
    phone?: string
}
const InfoRecipients: React.FC<InfoRecipType> = ({ phone = '', fullname = '', promotion = 'Tuấn nguyễn', methot = 'COD' }) => {
    return (
        <div>
            <h3 className="px-3 " >Thông tin người nhận</h3>
            <p className="px-3 mb-1" >{fullname} ({phone})</p>
            <p className="px-3 mb-1">Mã khuyến mãi: {promotion}</p>
            <p className="px-3 mb-1" >Phương thức thanh toán: {methot}</p>
        </div>
    );
};

export default InfoRecipients;
