import React from "react";
import { ArrowRight } from "react-feather";
import styler from "./time-line.module.scss";
import Colors from "../../../share/utils/colors";

type CheckOrderType = {
    status?: string;
};

const CheckOrder: React.FC<CheckOrderType> = ({ status = "pending" }) => {
    return (
        <div className="px-3 py-3">

            <div className={styler.timeLine}>
                <div className={styler.timeLineitem}>
                    <div className={styler.content}>
                        <div className={styler.icon}/>
                        <div className="text-center text-primary">
                            Chờ xác nhận
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <ArrowRight
                        size="16"
                        color={
                            ['paid', "shipped", 'delivered', "complete"].includes(status)
                                ? Colors.primary
                                : Colors.default
                        }
                    />
                </div>
                <div className={styler.timeLineitem}>
                    <div className={styler.content}>
                        <div className={styler.icon}/>
                        <div className="text-center">
                            Xác nhận
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <ArrowRight
                        size="16"
                        color={
                            ["shipped", 'delivered', "complete"].includes(status)
                                ? Colors.primary
                                : Colors.default
                        }
                    />
                </div>
                <div className={styler.timeLineitem}>
                    <div className={styler.content}>
                        <div className={styler.icon}/>
                        <div className="text-center">
                            Đang giao
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <ArrowRight
                        size="16"
                        color={
                            ['delivered', "complete"].includes(status)
                                ? Colors.primary
                                : Colors.default
                        }
                    />
                </div>
                <div className={styler.timeLineitem}>
                    <div className={styler.content}>
                        <div className={styler.icon}/>
                        <div className="text-center">
                            Chờ lấy hàng
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <ArrowRight
                        size="16"
                        color={
                            ["complete"].includes(status)
                                ? Colors.primary
                                : Colors.default
                        }
                    />
                </div>
                <div className={styler.timeLineitem}>
                    <div className={styler.content}>
                        <div className={styler.icon}/>
                        <div className="text-center">
                            Đã nhận
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOrder;
