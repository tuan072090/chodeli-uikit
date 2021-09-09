import React from "react";
import styles from "./InputIcon.module.scss";
import TextInput from "../../atoms/text-input";
import {X} from 'react-feather';
import {TextInputProps} from "../../../share/data-types";

const InputIcon: React.FC<TextInputProps> = (props) => {

    const _onClearClick = (event: React.MouseEvent) => {
        if (typeof props["onClearText"] !== "undefined") {
            props.onClearText(event)
        }
    }

    const value = props["value"] || ""
    const icon = props["icon"]

    return (
        <div className={styles.inputText}>
            <TextInput{...props}/>

            {
                icon ? <div className={styles.icon}>{icon}</div>
                    : value.length > 0 ? <div className={styles.icon} onClick={_onClearClick}><X size={20}/></div>
                    : null
            }

        </div>
    );
};

export default InputIcon;
