import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TextInputProps} from "../../../share/data-types";

import TextInput from "./index";
import Wrapper from "../../Wrapper";

export default {
    title: 'Atoms/TextInput',
    component: TextInput,
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
        }
    },
    decorators: [
        (Story) => (
            <Wrapper>
                <Story/>
            </Wrapper>
        ),
    ],
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    status: 'default',
    placeholder: 'Placeholder text',
    size: 'medium',
    outline: false
};

export const Large = Template.bind({});
Large.args = {
    status: 'default',
    size: "large",
    placeholder: 'Placeholder text',
};

export const Small = Template.bind({});
Small.args = {
    status: 'default',
    size: 'small',
    placeholder: 'Placeholder text',
};


export const Disabled = Template.bind({});
Disabled.args = {
    status: 'default',
    size: 'medium',
    disabled: true,
    placeholder: 'Placeholder text',
};
