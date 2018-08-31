import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { RegisterModal } from 'src/features/home/RegisterModal';

describe('home/RegisterModal', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <RegisterModal {...props} />
    );

    expect(
      renderedComponent.find('.home-register-modal').getElement()
    ).to.exist;
  });
});
