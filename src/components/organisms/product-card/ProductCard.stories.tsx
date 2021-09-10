import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ProductCard from "./index";
import {ProductCardProps} from "./ProductCard.type";

export default {
    title: 'Organisms/ProductCard',
    component: ProductCard,
    argTypes: {
        onClick: {action: 'clicked'}
    },
    decorators: [
        (Story) => (
            <div style={{maxWidth: 500}}>
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args: ProductCardProps) => <ProductCard {...args} />;

/**
 *
 image?: string,
 title: string,
 description?:string,
 price:number
 salePrice?:number
 onClick?:() =>void,
 onCTAClick?:()=>void
 */
export const Primary = Template.bind({});
Primary.args = {
    image: 'https://chodeli.s3.ap-southeast-1.amazonaws.com/thumbnail_carot2_cab3875027.png',
    title: 'Cà rốt Đà Lạt',
    description: 'Cà rốt trồng tại Đà Lạt, đảm bảo tiêu chuẩn Viet GAP',
    price: 10000,
    salePrice: 8000
};
