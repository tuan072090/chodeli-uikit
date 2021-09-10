import React, {ReactNode} from "react";

export interface HeaderBackProps extends React.PropsWithChildren<any> {
    iconBack?: boolean;
    leftContent?: ReactNode,
    rightContent?: ReactNode,
}
