import React, {memo, useEffect, useState} from "react";
import styles from './button.module.scss';
import {ButtonProps} from "./Button.type";
import Colors from "../../../share/utils/colors";
import Loader from "../loader";

const buttonColor = {
    primary: Colors.primary,
    info: Colors.info,
    success: Colors.success,
    danger: Colors.danger,
    warning: Colors.warning,
    default: Colors.backgroundColor,
    stopLoading: false
}

const Button: React.FC<ButtonProps> = memo(({text, status = "default", onClick, size = "medium",outline=false, stopLoading, ...props}) => {
    const [loading, setLoading] = useState(false);
    const backgroundColor = outline ? 'transparent' : buttonColor[status];
    const borderColor = buttonColor[status]
    const textColor = outline ? borderColor : status !== "default" ? "#ffffff" : Colors.bodyText;

    useEffect(() => {
        if(loading){
            //  auto hide loading after 5s
            const timeout = setTimeout(() => {setLoading(false)}, 3000)
            return () => clearTimeout(timeout)
        }
    },[loading])

    useEffect(() => {
        setLoading(stopLoading)
    }, [stopLoading])

    const _onClickHandler = (event:React.FormEvent) => {
        if(loading) {
            event.preventDefault()
            return false;
        }

        setLoading(true)
        if(typeof onClick === 'function') onClick(event);
    }

    const buttonSize = size === "small" ? styles.small : size === "large" ? styles.large : ""

    return (
        <button
            {...props}
            onClick={_onClickHandler}
            style={{backgroundColor: backgroundColor, borderColor: borderColor, color: textColor}}
            className={`btn btn-primary ${styles.button} ${buttonSize} ${props.className}`}>
            {
                loading ? <Loader/> : text
            }
        </button>
    )
})

export default Button
