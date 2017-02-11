/* global it, expect, describe */

import React from 'react';
import { shallow, mount } from 'enzyme';
import RecoverPassword from './RecoverPassword';
import Login from './login';

describe('the main wrapper', () => {
  it('renders without crashing', () => {
    shallow(<RecoverPassword handleShowLogin={() => {}} />);
  });

  it('renders the basic structure', () => {
    const wrapper = shallow(<RecoverPassword handleShowLogin={() => {}} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });
});
