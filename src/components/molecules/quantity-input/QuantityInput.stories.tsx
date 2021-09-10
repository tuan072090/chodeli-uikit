import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuantityInput, { QuantityProps } from ".";



export default {
    title: "molecules/QuantityInput",
    component: QuantityInput,
    argTypes: {
        quantity: {
            description: "Số lượng",
            defaultValue: 1
        },
    },
    decorators: [
        (Story) => (
            <div className="p-3 bg-white d-flex"  >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof QuantityInput>;

const Template: ComponentStory<typeof QuantityInput> = (args: QuantityProps) => (
    <QuantityInput {...args} />
);


export const Default = Template.bind({});
Default.args = {
    quantity: 1,
};
