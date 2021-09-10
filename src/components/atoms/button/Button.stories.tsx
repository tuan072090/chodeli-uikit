import React from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';

import Button  from './';
import {ButtonProps} from "./Button.type";

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        status: {
            description: 'Màu sắc sẽ tự thay đổi theo trạng thái',
            defaultValue: 'default',
            options: ['primary', 'info', 'success', 'danger', 'warning', 'default'],
            control: { type: 'radio' },
        },
        size: {
            description: 'Có 3 kích thước',
            defaultValue: 'medium',
            options: ['medium', 'large', 'small'],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' }
    }
} as Meta;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    status: 'primary',
    text: 'Button text',
    size: 'medium',
    outline: false
};

export const Large = Template.bind({});
Large.args = {
    status: 'primary',
    size: "large",
    text: "Button text"
};

export const Small = Template.bind({});
Small.args = {
    status: 'primary',
    size: 'small',
    text: 'Button text',
};
