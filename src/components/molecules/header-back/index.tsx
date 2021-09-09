import React, { ReactNode } from 'react';
import { ChevronLeft } from 'react-feather';
import Colors from "../../../share/utils/colors";

export interface HeaderBackProps extends React.PropsWithChildren<any> {
    iconBack?: boolean;
    leftContent?: ReactNode,
    rightContent?: ReactNode,
}
const HeaderBack: React.FC<HeaderBackProps> = ({ children, iconBack = false, leftContent, rightContent }) => {

    const _onClickBack = () => {

    }

    return (
        <div className='d-flex align-items-center align-items-center position-relative w-100 px-3 py-1' style={{height: 54}}>
            <div className='position-absolute left-0'>
                {iconBack && <ChevronLeft size={26} color={Colors.white} onClick={_onClickBack}/>}
                {leftContent}
            </div>
            <div className='d-flex justify-content-center align-items-center w-100'>
                {children}
            </div>
            <div className='position-absolute right-0'>
                {rightContent}
            </div>
        </div>
    );
};

export default HeaderBack;
