import Register from "./Register";
import { Avatar } from "@material-ui/core";
import { shallow } from "enzyme";
import {fireEvent, render, getByTestId} from '@testing-library/react';


test("Define Register", () => {
    expect(Register).toBeDefined();
});

test("Renders correctly", () => {
    const wrapper = render(<Register />);
    expect(wrapper).toMatchSnapshot();
});

test("Providers Btns", () => {
    const wrapper = mount(<Register />);

    const element = wrapper.find({id: "btn-inrupt-provider"}).first();
    expect(element).toBeDefined();
    expect(element.text()).toEqual("Inrupt");

    const element2 = wrapper.find({id: "btn-solid-community-provider"}).first();
    expect(element2).toBeDefined();
    expect(element2.text()).toEqual("Solid Community");
});

test("Avatar", () => {
    const wrapper = mount(<Register />);

    const element = wrapper.find(Avatar).first();
    expect(element).toBeDefined();
});

test("Click", () => {
    const {container} = render(<Register />);

    const button = getByTestId(container, 'btn-how-to-choose-provider');
    fireEvent.click(button);

    const button2 = getByTestId(container, 'btn-inrupt-provider');
    fireEvent.click(button2);

    const button3 = getByTestId(container, 'btn-solid-community-provider');
    fireEvent.click(button3);
});