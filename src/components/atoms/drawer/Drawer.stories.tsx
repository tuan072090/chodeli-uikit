import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Drawer, { DraweType } from './';

export default {
    title: 'Atoms/Drawer',
    component: Drawer,
    argTypes: {
        open: {
            description: 'Ẩn hiện Drawer',
            defaultValue: true,
        },
        anchor: {
            description: 'Vị trí của drawer',
            defaultValue: 'end',
            options: ['offcanvas-bottom', 'offcanvas-top', 'offcanvas-start', 'offcanvas-end'],
            control: { type: 'radio' },
        },
        onClick: { action: 'clicked' }
    },
    decorators: [
        (Story) => (
            <div className="w-100 p-3 bg-white">
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Drawer>;


const Template: ComponentStory<typeof Drawer> = (args: DraweType) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    children: 'Content  drawer',
    anchor: 'offcanvas-end'
};

// export const Large = Template.bind({});
// Large.args = {
//     status: 'primary',
//     size: "large",
//     text: "Button text"
// };

// export const Small = Template.bind({});
// Small.args = {
//     status: 'primary',
//     size: 'small',
//     text: 'Button text',
// };
