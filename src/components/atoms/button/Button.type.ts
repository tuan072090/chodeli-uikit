import React from "react";
import {SizeType, StatusType} from "../../../share/data-types";

export interface ButtonProps extends React.PropsWithChildren<any> {
    text: string;
    status?: StatusType;
    outline?: boolean;
    disable?: boolean;
    size?: SizeType
}
