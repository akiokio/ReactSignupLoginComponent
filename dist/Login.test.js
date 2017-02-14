'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the login form', function () {
  var requiredMockProps = {
    handleShowSignup: jest.fn(),
    handleShowRecover: jest.fn(),
    handleLogin: jest.fn(),
    handleChange: jest.fn(),
    username: '',
    password: ''
  };
  it('renders without crashing', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(_Login2.default, requiredMockProps));
  });

  it('renders the default skeleton', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Login2.default, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
    expect(wrapper.find('#signup-button')).toHaveLength(1);
  });

  it('renders with the default props', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Login2.default, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
    expect(wrapper.find('#recorver-password')).toHaveLength(1);
  });

  it('should call handle login when submit-login clicked', function () {
    var loginCallback = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Login2.default, {
      handleShowSignup: jest.fn(),
      handleLogin: loginCallback,
      handleShowRecover: jest.fn(),
      handleChange: jest.fn(),
      username: '',
      password: ''
    }));
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });
}); /* global it, expect, describe, jest */