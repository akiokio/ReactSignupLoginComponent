import React from 'react';

import Login from './Login';
import Signup from './Signup';

// Our only css dependency
import '../../node_modules/normalize.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);

    this.state = {
      isLogin: this.props.isLogin,
      username: '',
      password: '',
    };
  }

  updateState(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const styles = {
      wrapper: {
        display: 'block',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#FAFAFA',
        margin: 10,
        padding: 20,
        maxWidth: '500px',

        width: 500,
        height: 400,
        perspective: 1000,
      },
      title: {
        textAlign: 'center',
        height: 40,
        lineHeight: '40px',
      },
      flipper: {
        transition: '0.4s',
        transformStyle: 'preserve-3d',
        position: 'relative',
        transform: `rotateY(${this.state.isLogin ? '0' : '180'}deg)`,
      },
    };
    return (
      <section style={styles.wrapper}>
        <h1 style={styles.title}>{this.props.title}</h1>
        <div style={styles.flipper}>
          { this.state.isLogin
            ? <Login key="login-form" handleShowSignup={this.updateState} />
            : <Signup key="signup-form" handleShowLogin={this.updateState} />
          }
        </div>
      </section>
    );
  }
}

Wrapper.propTypes = {
  title: React.PropTypes.string,
  isLogin: React.PropTypes.bool,
};

Wrapper.defaultProps = {
  title: 'Company Name',
  isLogin: true,
};


export default Wrapper;
