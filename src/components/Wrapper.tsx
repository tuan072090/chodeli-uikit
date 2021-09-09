import React from "react";
import "../styles/globals.scss"

const Wrapper:React.FC<React.PropsWithChildren<any>> = (props) => {

    return (
        <div className="w-100 p-3 bg-white">
            {props.children}
        </div>
    )
}
export default Wrapper
