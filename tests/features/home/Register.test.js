import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Register } from 'src/features/home';

describe('home/Register', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Register />
    );

    expect(
      renderedComponent.find('.home-register').getElement()
    ).to.exist;
  });
});
