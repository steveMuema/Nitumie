import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AppHeader } from 'src/features/home';

describe('home/AppHeader', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <AppHeader />
    );

    expect(
      renderedComponent.find('.home-app-header').getElement()
    ).to.exist;
  });
});
