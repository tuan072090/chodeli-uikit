import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import FormControlError from './';
import {ErrorProps} from "./FormControlError.type";
import Wrapper from "../../Wrapper";

export default {
    title: 'Atoms/ErrorText',
    component: FormControlError,
    decorators: [
        (Story) => (
            <Wrapper>
                <Story/>
            </Wrapper>
        ),
    ],
} as ComponentMeta<typeof FormControlError>;

const Template: ComponentStory<typeof FormControlError> = (args: ErrorProps) => <FormControlError {...args} />;

export const Required = Template.bind({});
Required.args = {
    error: {
        type: 'required',
        message: 'This is required info'
    }
};

export const Min = Template.bind({});
Min.args = {
    error: {
        type: 'min',
    }
};

export const Max = Template.bind({});
Max.args = {
    error: {
        type: 'max',
    }
};

export const MinLength = Template.bind({});
MinLength.args = {
    error: {
        type: 'minLength',
    }
};
export const MaxLength = Template.bind({});
MaxLength.args = {
    error: {
        type: 'maxLength',
    }
};
