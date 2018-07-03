import * as React from 'react';

import { shallow } from 'enzyme';

import * as fetch from 'jest-fetch-mock';

import HouseList from "./houselist";

import { House } from '../models/house';

describe("HouseList", () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it("HouseList renders correctly", () => {
    const h1 = new House();
    h1.name='My House';
    h1.url='Theurl';
    fetch.mockResponseOnce(JSON.stringify({ data: [h1] }))
    const component = shallow(
      <HouseList
      />,
      { disableLifecycleMethods: false }
    );
    expect(component).toMatchSnapshot();
  });
});
