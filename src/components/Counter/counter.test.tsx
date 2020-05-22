import React from 'react';
import Counter from "./index";
import { mount } from "enzyme";
import { container } from "../../utils/IoC";
import { CounterStore } from "./store";

describe("Counter", () => {

  test("Original store", () => {
    const wrapper = mount(<Counter/>);
    const store = container.get(CounterStore);

    expect(wrapper.find("span").text()).toEqual("0");

    wrapper.find({ onClick: store.increment }).simulate('click');

    expect(wrapper.find("span").text()).toEqual("1");
  });

  test("Rebound store", () => {
    // @ts-ignore
    container.rebind(CounterStore).toConstantValue({ count: 5 });

    const wrapper = mount(<Counter/>);

    expect(wrapper.find("span").text()).toEqual("5");

    container.rebind(CounterStore).to(CounterStore);
  });
});
