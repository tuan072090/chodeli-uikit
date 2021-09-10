import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar, { NavbarProps } from "./";



export default {
    title: 'Atoms/NavBar',
    component: NavBar,
    argTypes: {
        anchor: {
            description: 'Vị trí của navbar',
            defaultValue: 'top',
            options: ['top', 'bottom'],
            control: { type: 'radio' },
        },
        backgroud: {
            description: 'Mày sắc của navbar',
            defaultValue: 'white',
            options: ['primary', 'info', 'success', 'danger', 'warning', 'default'],
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
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args: NavbarProps) => <NavBar {...args} />;

export const index = Template.bind({});
index.args = {
    anchor: 'top',
    backgroud: 'white',
    children: 'body navbar'
};
