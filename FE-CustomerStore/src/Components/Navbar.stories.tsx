import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
    title: 'Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <BrowserRouter><Navbar /></BrowserRouter>;

export const Primary = Template.bind({});