import React from "react";

type anchorType = "bottom" | "top" | 'right' | 'left';
type backgroudType = "primary" | "white";
export interface NavbarProps extends React.PropsWithChildren<any> {
    anchor?: anchorType;
    backgroud?: backgroudType;
    className?: string,
}

const Navbar: React.FC<NavbarProps> = ({
    children,
    anchor = "top",
    backgroud = "white",
    className,
    ...rest
}) => {
    return (
        <nav className={`navbar fixed-${anchor} navbar-white bg-${backgroud} p-0`} {...rest}>
            <div className="main-content">
                {children}
            </div>
        </nav>
    );
};

export default Navbar;
