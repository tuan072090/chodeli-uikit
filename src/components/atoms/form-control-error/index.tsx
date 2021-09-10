import React from "react";
import {ErrorProps} from "./FormControlError.type";

const errorMessageMapping = {
    required: "Thiếu thông tin",
    minLength: "Quá ngắn",
    maxLength: "Quá dài",
    min: "Quá nhỏ",
    max: "Quá lớn"
}

const FormControlError = ({error}: ErrorProps) => {

    if (!error) return null

    const mess = error.message || errorMessageMapping[error.type]

    return (
        <div className="p-1 text-danger">
            <i>{mess}</i>
        </div>
    )
}

export default FormControlError
