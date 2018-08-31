import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { BasicDescription } from 'src/features/home';

describe('home/BasicDescription', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <BasicDescription />
    );

    expect(
      renderedComponent.find('.home-basic-description').getElement()
    ).to.exist;
  });
});
