import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import HeaderBack from "./index";
import Button from "../../atoms/button";

export default {
    title: 'Molecules/HeaderBack',
    component: HeaderBack,
    argTypes: {
        iconBack: {
            description: 'Show back button or not',
            defaultValue: true
        },
        leftContent: {
            description: 'A left content component',
        },
        rightContent: {
            description: 'A right content component',
        },
    },
    decorators: [
        (Story) => (
            <div className="bg-primary w-100">
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof HeaderBack> = () => {
    return(
        <HeaderBack
            iconBack={true}
        >
            <h6 className="text-white mb-0">Page title</h6>
        </HeaderBack>
    )
}

export const ContentLeft: ComponentStory<typeof HeaderBack> = () => {
    return(
        <HeaderBack
            iconBack={true}
            leftContent={<div className="text-white">Content left</div>}>
            <h6 className="text-white mb-0">Page title</h6>
        </HeaderBack>
    )
}

export const ContentRight: ComponentStory<typeof HeaderBack> = () => {
    return(
        <HeaderBack
            iconBack={true}
            leftContent={<div className="text-white">Content left</div>}
            rightContent={<div className="text-white">Right content</div>}
        >
            <h6 className="text-white mb-0">Page title</h6>
        </HeaderBack>
    )
}
