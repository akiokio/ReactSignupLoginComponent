import React from 'react';
import Login from './Login';
import Signup from './Signup';

// Our only css dependency
import '../../node_modules/normalize.css';

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    cursor: 'pointer',
    fontSize: 15,
    margin: 10,
    padding: 20,
    maxWidth: '500px',
  },
  form: {
    width: '100%',
  },
  flip: {
    transition: '.6s ease-in',
  },
};

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
    return (
      <section style={styles.wrapper}>
        <h1>{this.props.title}</h1>
        { this.state.isLogin
          ? <Login handleShowSignup={this.updateState} />
          : <Signup handleShowLogin={this.updateState} />
        }
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
