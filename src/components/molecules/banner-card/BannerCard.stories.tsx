import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BannerCard from ".";



export default {
    title: "molecules/BannerCard",
    component: BannerCard,
    argTypes: {
        src: {
            description: "Link hình ảnh",
            defaultValue: 'https://media.meete.co/cache/1000x0/2021/05/05/cb773727-5d59-4dc8-8bea-fa6811725896.jpeg'
        },
    },
    decorators: [
        (Story) => (
            <div className="p-3 bg-white" style={{ maxWidth: 500 }} >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof BannerCard>;

const Template: ComponentStory<typeof BannerCard> = (args) => (
    <BannerCard {...args} />
);

export const index = Template.bind({});
index.args = {
    src: 'https://media.meete.co/cache/1000x0/2021/05/05/cb773727-5d59-4dc8-8bea-fa6811725896.jpeg'
};
