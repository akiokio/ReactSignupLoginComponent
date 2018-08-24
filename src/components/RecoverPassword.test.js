/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import RecoverPassword from './RecoverPassword';

describe('the main wrapper', () => {
  const requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleChange: jest.fn(),
    handleRecoverPassword: jest.fn(),
    username: '',
    usernameCustomLabel: 'Username',
    goToLoginCustomLabel: 'Login',
  };
  it('renders without crashing', () => {
    shallow(<RecoverPassword {...requiredMockProps} />);
  });

  it('renders the basic structure', () => {
    const wrapper = shallow(<RecoverPassword {...requiredMockProps} />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });

  describe('with custom labels', () => {
    const customLabelUsername = 'email?';
    const customGoToLogin = 'Back to login';
    const wrapper = shallow(
      <RecoverPassword
        {...requiredMockProps}
        usernameCustomLabel={customLabelUsername}
        goToLoginCustomLabel={customGoToLogin}
      />,
    );
    it('should render custom labels if provided', () => {
      expect(wrapper.find('input[name="username"]').prop('placeholder')).toEqual(customLabelUsername);
      expect(wrapper.find('#login-button').text()).toEqual(customGoToLogin);
    });
  });
});
