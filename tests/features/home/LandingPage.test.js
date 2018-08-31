import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LandingPage } from 'src/features/home/LandingPage';

describe('home/LandingPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <LandingPage {...props} />
    );

    expect(
      renderedComponent.find('.home-landing-page').getElement()
    ).to.exist;
  });
});
