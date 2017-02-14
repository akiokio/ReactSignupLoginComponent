'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ReactSignupLoginComponent = require('./ReactSignupLoginComponent');

var _ReactSignupLoginComponent2 = _interopRequireDefault(_ReactSignupLoginComponent);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require('./Signup');

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('the main wrapper', function () {
  var requiredMockProps = {
    handleSignup: jest.fn(),
    handleLogin: jest.fn(),
    handleRecoverPassword: jest.fn()
  };
  it('renders without crashing', function () {
    (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
  });

  it('renders the default skeleton', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('initialize with the default state', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().passwordConfirmation).toEqual('');
  });

  it('initialize with the required props', function () {
    var dummyFunc = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      handleSignup: dummyFunc,
      handleLogin: dummyFunc,
      handleRecoverPassword: dummyFunc
    }));
    expect(wrapper.instance().props.handleSignup).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleLogin).toEqual(dummyFunc);
    expect(wrapper.instance().props.handleRecoverPassword).toEqual(dummyFunc);
  });

  it('renders with the login component by default', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    expect(wrapper.find(_Login2.default)).toHaveLength(1);
  });

  it('render with the signup form if the isLogin equals false', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ReactSignupLoginComponent2.default, Object.assign({ isLogin: false }, requiredMockProps)));
    expect(wrapper.find(_Signup2.default)).toHaveLength(1);
  });

  it('show the signup component on the signup button click', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    wrapper.find('#signup-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(false);
    expect(wrapper.find(_Signup2.default)).toHaveLength(1);
  });

  it('show the login component on the login button click on signup', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, Object.assign({ isLogin: false }, requiredMockProps)));
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isLogin).toEqual(true);
    expect(wrapper.find(_Login2.default)).toHaveLength(1);
  });

  it('show the recover password component on the recover button click', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    wrapper.find('#recorver-password').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(true);
    expect(wrapper.find('#recover-password-form')).toHaveLength(1);
  });

  it('show the login component on the login button click on recover password', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, Object.assign({ isRecoveringPassword: true }, requiredMockProps)));
    wrapper.find('#login-button').simulate('click');
    expect(wrapper.state().isRecoveringPassword).toEqual(false);
    expect(wrapper.find(_Login2.default)).toHaveLength(1);
  });

  it('should call handle signup when submit-signup clicked', function () {
    var signupCallback = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      isLogin: false,
      handleSignup: signupCallback,
      handleLogin: jest.fn(),
      handleRecoverPassword: jest.fn()
    }));
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle login when submit-login clicked', function () {
    var loginCallback = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      handleSignup: jest.fn(),
      handleLogin: loginCallback,
      handleRecoverPassword: jest.fn()
    }));
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls.length).toEqual(1);
  });

  it('should call handle recover password when submit-recover-password clicked', function () {
    var recoverCallback = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      isRecoveringPassword: true,
      handleSignup: jest.fn(),
      handleLogin: jest.fn(),
      handleRecoverPassword: recoverCallback
    }));
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverCallback.mock.calls.length).toEqual(1);
  });

  it('should attach the login inputs to the state', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, requiredMockProps));
    var usernameInput = wrapper.find('#login-form input[name="username"]');
    usernameInput.node.value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');

    var passwordInput = wrapper.find('#login-form input[name="password"]');
    passwordInput.node.value = 'themonkeyatethebanana';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebanana');
  });

  it('should attach the signup inputs to the state', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, Object.assign({ isLogin: false }, requiredMockProps)));
    var usernameInput = wrapper.find('#signup-form input[name="username"]');
    usernameInput.node.value = 'johnSignup123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('johnSignup123');

    var passwordInput = wrapper.find('#signup-form input[name="password"]');
    passwordInput.node.value = 'themonkeyatethebananaonsignup';
    passwordInput.simulate('change', passwordInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');

    var passConfirmInput = wrapper.find('#signup-form input[name="passwordConfirmation"]');
    passConfirmInput.node.value = 'themonkeyatethebananaonsignup';
    passConfirmInput.simulate('change', passConfirmInput);
    expect(wrapper.state().password).toEqual('themonkeyatethebananaonsignup');
  });

  it('should attach the recorver password input to the state', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, Object.assign({ isRecoveringPassword: true }, requiredMockProps)));
    var usernameInput = wrapper.find('#recover-password-form input[name="username"]');
    usernameInput.node.value = 'john123';
    usernameInput.simulate('change', usernameInput);
    expect(wrapper.state().username).toEqual('john123');
  });

  it('should return the username, password and password confirmation on the singup callback', function () {
    var signupCallback = jest.fn();
    var signupValues = {
      username: 'johndoe',
      password: '1234%##D',
      passwordConfirmation: '1234%##D'
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      isLogin: false,
      handleSignup: signupCallback,
      handleLogin: jest.fn(),
      handleRecoverPassword: jest.fn()
    }));
    wrapper.setState(signupValues);
    wrapper.find('#submit-signup').simulate('click');
    expect(signupCallback.mock.calls[0][0]).toEqual(signupValues);
  });

  it('should return the username, password on the login callback', function () {
    var loginCallback = jest.fn();
    var loginValues = {
      username: 'johndoeLog',
      password: '1234%##DLog'
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      handleSignup: jest.fn(),
      handleLogin: loginCallback,
      handleRecoverPassword: jest.fn()
    }));
    wrapper.setState(loginValues);
    wrapper.find('#submit-login').simulate('click');
    expect(loginCallback.mock.calls[0][0]).toEqual(loginValues);
  });

  it('should return the username on the recover password callback', function () {
    var recoverPasswordCallback = jest.fn();
    var recoverPasswordValues = {
      username: 'johndoeForgot'
    };
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ReactSignupLoginComponent2.default, {
      isRecoveringPassword: true,
      handleSignup: jest.fn(),
      handleLogin: jest.fn(),
      handleRecoverPassword: recoverPasswordCallback
    }));
    wrapper.setState(recoverPasswordValues);
    wrapper.find('#submit-recover-password').simulate('click');
    expect(recoverPasswordCallback.mock.calls[0][0]).toEqual(recoverPasswordValues);
  });
}); /* global it, expect, describe, jest */