import React, { ReactNode } from 'react';
import { ChevronLeft } from 'react-feather';
import Colors from "../../../share/utils/colors";
import {HeaderBackProps} from "./HeaderBack.type";

const HeaderBack: React.FC<HeaderBackProps> = ({ children, iconBack = false, leftContent, rightContent }) => {

    const _onClickBack = () => {

    }

    return (
        <div className='d-flex align-items-center align-items-center position-relative w-100 px-3 py-1' style={{height: 54}}>
            <div className='position-absolute start-0 d-flex align-items-center'>
                {iconBack && <ChevronLeft size={26} color={Colors.white} onClick={_onClickBack}/>}
                {leftContent}
            </div>
            <div className='d-flex justify-content-center align-items-center w-100'>
                {children}
            </div>
            <div className='position-absolute end-0 d-flex align-items-center justify-content-center'>
                {rightContent}
            </div>
        </div>
    );
};

export default HeaderBack;
