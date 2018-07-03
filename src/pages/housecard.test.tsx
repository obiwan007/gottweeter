import * as React from 'react';

import { ShallowRenderer } from 'react-test-renderer/shallow'; // ES6

import { shallow } from 'enzyme';

import HouseCard from "./housecard";

import { House } from '../models/house';

describe("HouseCard", () => {

  it("HouseCard renders correctly if empty", () => {
    const component = shallow(
      <HouseCard
      />,
      { disableLifecycleMethods: false }
    );
    expect(component).toMatchSnapshot();
  });

  it("HouseCard renders correctly with House", () => {
    const house = new House();
    house.name = 'My House';
    const component = shallow(
      <HouseCard
        house = {house}
      />,
      { disableLifecycleMethods: false }
    );
    expect(component).toMatchSnapshot();
  });

});
