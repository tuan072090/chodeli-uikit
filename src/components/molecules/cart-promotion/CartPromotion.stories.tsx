import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CartPromotion from "./";

export default {
    title: "molecules/CartPromotion",
    component: CartPromotion,
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
} as ComponentMeta<typeof CartPromotion>;

const Template: ComponentStory<typeof CartPromotion> = (args: any) => (
    <CartPromotion {...args} />
);

export const Default = Template.bind({});

Default.args = {
    totalPrice: 100000,
    // totalSale: 90000,
};
