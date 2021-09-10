import React, { Children, ReactElement } from "react";

export type DraweType = {
    open: boolean;
    className?: any;
    anchor?:
    | "offcanvas-bottom"
    | "offcanvas-top"
    | "offcanvas-start"
    | "offcanvas-end";
};

const Drawer: React.FC<DraweType> = ({
    open,
    children,
    className,
    anchor = "offcanvas-end",
}) => {
    return (
        <div
            className={`offcanvas visible ${anchor}
              ${open ? "show" : ""}
              ${className} 
            `}
        >
            <div className="offcanvas-body">{children}</div>
        </div>
    );
};
export default Drawer;
