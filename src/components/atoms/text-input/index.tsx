import React, {memo} from "react";
import styles from "./textInput.module.scss";
import {TextInputProps} from "./TextInput.type";

const TextInput: React.FC<TextInputProps> = memo(({status = "default", size="medium", type, placeholder, ...props}) => {

    const isDisable = !!props["disabled"]
    const inputSize = size === "small" ? styles.small : size === "large" ? styles.large : ""
    const borderColor = "border-"+status

    return (
        <input
            {...props}
            className={`form-control ${borderColor} ${inputSize} ${isDisable ? styles.textInput+" "+styles.disabled: styles.textInput} ${props.className}`}
            placeholder={placeholder}
            type={type}
        />
    );
});

export default TextInput;
