'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _RecoverPassword = require('./RecoverPassword');

var _RecoverPassword2 = _interopRequireDefault(_RecoverPassword);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global it, expect, describe, jest */

describe('the main wrapper', function () {
  var requiredMockProps = {
    handleShowLogin: jest.fn(),
    handleChange: jest.fn(),
    handleRecoverPassword: jest.fn(),
    username: ''
  };
  it('renders without crashing', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(_RecoverPassword2.default, requiredMockProps));
  });

  it('renders the basic structure', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RecoverPassword2.default, requiredMockProps));
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
    expect(wrapper.find('#login-button')).toHaveLength(1);
  });
});