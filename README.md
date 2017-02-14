# ReactSignupLoginComponent
[![Coverage Status](https://coveralls.io/repos/github/akiokio/ReactSignupLoginComponent/badge.svg?branch=master)](https://coveralls.io/github/akiokio/ReactSignupLoginComponent?branch=master)
[![Build Status](https://travis-ci.org/akiokio/ReactSignupLoginComponent.svg?branch=master)](https://travis-ci.org/akiokio/ReactSignupLoginComponent)

Check out the [examples](https://akiokio.github.io/ReactSignupLoginComponent/) to learn how to use it.

## Features
- Login
- Signup
- Recover Password
- Callbacks for every action
- 100% test coverage
- Drop-in component

## How to use it

### Installing
Using npm:
```javascript
$ npm install react-signup-login-component
```
Using yarn:
```javascript
$ yarn add react-signup-login-component
```

### Getting started
```javascript
import ReactSignupLoginComponent from 'react-signup-login-component';

const LoginPage = (props) => {
    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };
    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert('Login callback, see log on the console to see the data.');
    };
    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
    };
    return (
        <div>
            <ReactSignupLoginComponent
                title="My awesome company"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
            />
        </div>
    );
};

export default LoginPage;
```

## Configuration (Props) options

### Required props
### `handleSignup(object)`
Called when the users clicks on the signup button and the form is valid
**return**: An object with the attributes: **username**, **password** and **passwordConfirmation**
**example**: 
```js
{
  username: 'johndoe',
  password: '1234%##D',
  passwordConfirmation: '1234%##D'
};
```
### `handleLogin(object)`
Called when the users clicks on the login button and the form is valid
**return**: An object with the attributes: **username** and **password**
**example**: 
```js
{
  username: 'johndoe',
  password: '1234%##D'
};
```

### `handleRecoverPassword(object)`
Called when the users clicks on the recover password button and the form is valid
**return**: An object with the attributes: **username**
**example**: 
```js
{
  username: 'johndoe'
};
```

### Optional props
### `title`
Sets the h1 title on the login box
**example**: 
```js
<Wrapper
  title="My awesome company"
  {...requiredProps} // Spread the default props. It's here to illustrate the example
/>
```

### `styles`
You can overhide the component style passing an object to the styles prop. Here's an example with all the possible keys. The values can be any valid css property.
**example**: 
```js
<ReactSignupLoginComponent
  styles={{
    mainWrapper: { backgroundColor: 'blue' },
    mainTitle: { color: 'red' },
    flipper: { transition: '0.1s' },
    signup: {
      wrapper: { backgroundColor: 'yellow' },
      inputWrapper: { backgroundColor: 'AliceBlue' },
      buttonsWrapper: { backgroundColor: 'Aqua' },
      input: { backgroundColor: 'LavenderBlush' },
      recoverPassword: {},
      button: { backgroundColor: 'LightCoral' },
    },
    login: {
      wrapper: { backgroundColor: 'yellow' },
      inputWrapper: { backgroundColor: 'AliceBlue' },
      buttonsWrapper: { backgroundColor: 'Aqua' },
      input: { backgroundColor: 'LavenderBlush' },
      recoverPasswordWrapper: { backgroundColor: 'MediumBlue' },
      recoverPasswordButton: { backgroundColor: 'OldLace ' },
      button: { backgroundColor: 'LightCoral' },
    },
    recoverPassword: {
      wrapper: { backgroundColor: 'yellow' },
      inputWrapper: { backgroundColor: 'AliceBlue' },
      buttonsWrapper: { backgroundColor: 'Aqua' },
      input: { backgroundColor: 'LavenderBlush' },
      button: { backgroundColor: 'LightCoral' },
    },
  }}
  {...requiredProps} // Spread the default props. It's here to illustrate the example
/>
```

## Tests
We have a 100% percent test coverage, to run the tests locally:
```js
$ git clone https://github.com/akiokio/ReactSignupLoginComponent
$ cd ReactSignupLoginComponent
$ yarn install
$ yarn test
or to get the coverage report
$ yarn coverage
```

## Issues
If you found something wrong with the component please open an issue here: [https://github.com/akiokio/ReactSignupLoginComponent/issues/new](https://github.com/akiokio/ReactSignupLoginComponent/issues/new)

## Notes
This readme is a working in progress, feel free to help update it making a pull request

## License
Licensed under the MIT License: https://opensource.org/licenses/MIT
