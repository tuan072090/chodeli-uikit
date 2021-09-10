import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CartTotal, { CartTotalType } from "./";

export default {
    title: "molecules/CartTotal",
    component: CartTotal,
    argTypes: {
        totalPrice: {
            escription: "Tổng tiền đơn hàng",
            defaultValue: 100000,
        },

        totalSale: {
            escription: "Tổng tiền đơn hàng",
            defaultValue: 100000,
        },
    },
    decorators: [
        (Story) => (
            <div className="p-3 bg-white" style={{ width: '320' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof CartTotal>;

const Template: ComponentStory<typeof CartTotal> = (args: CartTotalType) => (
    <CartTotal {...args} />
);

export const Default = Template.bind({});

Default.args = {
    totalPrice: 100000,
    totalSale: 90000,
};
