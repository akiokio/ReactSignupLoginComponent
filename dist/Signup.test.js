'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Signup = require('./Signup');

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the signup form', function () {
  var requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleSignup: jest.fn(),
    handleChange: jest.fn(),
    username: '',
    password: '',
    passwordConfirmation: ''
  };
  it('renders without crashing', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(_Signup2.default, requiredMockProps));
  });

  it('renders the input fields', function () {
    var form = (0, _enzyme.shallow)(_react2.default.createElement(_Signup2.default, requiredMockProps));
    expect(form.find('input[name="username"]')).toHaveLength(1);
    expect(form.find('input[name="password"]')).toHaveLength(1);
    expect(form.find('input[name="passwordConfirmation"]')).toHaveLength(1);
    expect(form.find('input[type="submit"]')).toHaveLength(1);
    expect(form.find('#login-button')).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', function () {
    var signupCallback = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Signup2.default, {
      handleShowLogin: jest.fn(),
      handleSignup: signupCallback,
      handleChange: jest.fn(),
      username: '',
      password: '',
      passwordConfirmation: ''
    }));
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });
}); /* global it, expect, describe, jest */