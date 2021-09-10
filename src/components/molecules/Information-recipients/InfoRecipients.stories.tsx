import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InfoRecipients, { InfoRecipType } from "./";

export default {
    title: "molecules/InfoRecipients",
    component: InfoRecipients,
    argTypes: {
        fullname: {
            description: "Tên người đặt hàng",
            defaultValue: "",
        },
        promotion: {
            description: "Mã khuyễn mãi",
            defaultValue: "",
        },
        methot: {
            description: "Phương thức thanh toán",
            defaultValue: "",
        },
        phone: {
            description: "Số điện thoại",
            defaultValue: "",
        },
    },
    decorators: [
        (Story) => (
            <div className="p-3 bg-white">
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof InfoRecipients>;

const Template: ComponentStory<typeof InfoRecipients> = (
    args: InfoRecipType
) => <InfoRecipients {...args} />;

export const index = Template.bind({});
index.args = {
    fullname: "Trần Quốc khánh",
    phone: "0966536096",
    promotion: "QC-2/9",
    methot: "COD",
};
