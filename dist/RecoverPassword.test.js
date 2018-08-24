/* global it, expect, describe, jest */

import React from 'react';
import { shallow } from 'enzyme';
import RecoverPassword from './RecoverPassword';

describe('the main wrapper', function () {
  var requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleChange: jest.fn(),
    handleRecoverPassword: jest.fn(),
    username: '',
    usernameCustomLabel: 'Username',
    goToLoginCustomLabel: 'Login',
    submitRecoverPasswordCustomLabel: 'Help me'
  };
  it('renders without crashing', function () {
    shallow(React.createElement(RecoverPassword, requiredMockProps));
  });

  it('renders the basic structure', function () {
    var wrapper = shallow(React.createElement(RecoverPassword, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });

  describe('with custom labels', function () {
    var customLabelUsername = 'email?';
    var customGoToLogin = 'Back to login';
    var customSubmitRecover = 'Help me';
    var wrapper = shallow(React.createElement(RecoverPassword, Object.assign({}, requiredMockProps, {
      usernameCustomLabel: customLabelUsername,
      goToLoginCustomLabel: customGoToLogin,
      submitRecoverPasswordCustomLabel: customSubmitRecover
    })));
    it('should render custom labels if provided', function () {
      expect(wrapper.find('input[name="submit-recover-password"]').prop('value')).toEqual(customSubmitRecover);
      expect(wrapper.find('input[name="username"]').prop('placeholder')).toEqual(customLabelUsername);
      expect(wrapper.find('#login-button').text()).toEqual(customGoToLogin);
    });
  });
});