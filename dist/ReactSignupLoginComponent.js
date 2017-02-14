'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require('./Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _RecoverPassword = require('./RecoverPassword');

var _RecoverPassword2 = _interopRequireDefault(_RecoverPassword);

require('./normalize.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Our only css dependency


var ReactSignupLoginComponent = function (_React$Component) {
  _inherits(ReactSignupLoginComponent, _React$Component);

  function ReactSignupLoginComponent(props) {
    _classCallCheck(this, ReactSignupLoginComponent);

    var _this = _possibleConstructorReturn(this, (ReactSignupLoginComponent.__proto__ || Object.getPrototypeOf(ReactSignupLoginComponent)).call(this, props));

    _this.updateState = _this.updateState.bind(_this);
    _this.bubleUpSignup = _this.bubleUpSignup.bind(_this);
    _this.bubleUpLogin = _this.bubleUpLogin.bind(_this);
    _this.bubleUpRecoverPassword = _this.bubleUpRecoverPassword.bind(_this);

    _this.state = {
      isLogin: _this.props.isLogin,
      isRecoveringPassword: _this.props.isRecoveringPassword,
      username: '',
      password: '',
      passwordConfirmation: ''
    };
    return _this;
  }

  _createClass(ReactSignupLoginComponent, [{
    key: 'updateState',
    value: function updateState(key, value) {
      this.setState(_defineProperty({}, key, value));
    }
  }, {
    key: 'bubleUpSignup',
    value: function bubleUpSignup() {
      this.props.handleSignup({
        username: this.state.username,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation
      });
    }
  }, {
    key: 'bubleUpLogin',
    value: function bubleUpLogin() {
      this.props.handleLogin({
        username: this.state.username,
        password: this.state.password
      });
    }
  }, {
    key: 'bubleUpRecoverPassword',
    value: function bubleUpRecoverPassword() {
      this.props.handleRecoverPassword({
        username: this.state.username
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = {
        wrapper: {
          border: '1px solid #eee',
          borderRadius: 3,
          backgroundColor: '#FAFAFA',
          margin: 10,
          padding: 20,
          maxWidth: '500px',

          width: 500,
          height: 400,
          perspective: 1000
        },
        title: {
          textAlign: 'center',
          height: 40,
          lineHeight: '40px'
        },
        flipper: {
          transition: '0.4s',
          transformStyle: 'preserve-3d',
          position: 'relative',
          transform: 'rotateY(' + (!this.state.isLogin || this.state.isRecoveringPassword ? '180' : '0') + 'deg)'
        }
      };
      var showCard = function showCard() {
        if (_this2.state.isLogin && !_this2.state.isRecoveringPassword) {
          return _react2.default.createElement(_Login2.default, {
            key: 'login-form',
            handleShowSignup: _this2.updateState,
            handleShowRecover: _this2.updateState,
            styles: _this2.props.styles.login,
            handleLogin: _this2.bubleUpLogin,
            handleChange: _this2.updateState,
            username: _this2.state.username,
            password: _this2.state.password
          });
        } else if (!_this2.state.isLogin && !_this2.state.isRecoveringPassword) {
          return _react2.default.createElement(_Signup2.default, {
            key: 'signup-form',
            handleShowLogin: _this2.updateState,
            styles: _this2.props.styles.signup,
            handleSignup: _this2.bubleUpSignup,
            handleChange: _this2.updateState,
            username: _this2.state.username,
            password: _this2.state.password,
            passwordConfirmation: _this2.state.passwordConfirmation
          });
        }
        return _react2.default.createElement(_RecoverPassword2.default, {
          handleShowLogin: _this2.updateState,
          handleRecoverPassword: _this2.bubleUpRecoverPassword,
          handleChange: _this2.updateState,
          styles: _this2.props.styles.recoverPassword,
          username: _this2.state.username
        });
      };
      return _react2.default.createElement(
        'section',
        { id: 'main-wrapper', style: Object.assign(styles.wrapper, this.props.styles.mainWrapper) },
        _react2.default.createElement(
          'h1',
          { style: Object.assign(styles.title, this.props.styles.mainTitle) },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { style: Object.assign(styles.flipper, this.props.styles.flipper) },
          showCard()
        )
      );
    }
  }]);

  return ReactSignupLoginComponent;
}(_react2.default.Component);

ReactSignupLoginComponent.propTypes = {
  title: _react2.default.PropTypes.string,
  isLogin: _react2.default.PropTypes.bool,
  isRecoveringPassword: _react2.default.PropTypes.bool,
  styles: _react2.default.PropTypes.shape({
    mainWrapper: _react2.default.PropTypes.object,
    mainTitle: _react2.default.PropTypes.object,
    flipper: _react2.default.PropTypes.object,
    signup: _react2.default.PropTypes.shape({
      wrapper: _react2.default.PropTypes.object,
      inputWrapper: _react2.default.PropTypes.object,
      buttonsWrapper: _react2.default.PropTypes.object,
      input: _react2.default.PropTypes.object,
      recoverPassword: _react2.default.PropTypes.object,
      button: _react2.default.PropTypes.object
    }),
    login: _react2.default.PropTypes.shape({
      wrapper: _react2.default.PropTypes.object,
      inputWrapper: _react2.default.PropTypes.object,
      buttonsWrapper: _react2.default.PropTypes.object,
      input: _react2.default.PropTypes.object,
      recoverPasswordWrapper: _react2.default.PropTypes.object,
      recoverPasswordButton: _react2.default.PropTypes.object,
      button: _react2.default.PropTypes.object
    }),
    recoverPassword: _react2.default.PropTypes.shape({
      wrapper: _react2.default.PropTypes.object,
      inputWrapper: _react2.default.PropTypes.object,
      buttonsWrapper: _react2.default.PropTypes.object,
      input: _react2.default.PropTypes.object,
      button: _react2.default.PropTypes.object
    })
  }),
  handleSignup: _react2.default.PropTypes.func.isRequired,
  handleLogin: _react2.default.PropTypes.func.isRequired,
  handleRecoverPassword: _react2.default.PropTypes.func.isRequired
};

ReactSignupLoginComponent.defaultProps = {
  title: 'Company Name',
  isLogin: true,
  isRecoveringPassword: false,
  styles: {}
};

exports.default = ReactSignupLoginComponent;