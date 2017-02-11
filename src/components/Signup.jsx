import React from 'react';

const Signup = ({ options }) => (
  <section>
    <h1>This is the signup container</h1>
  </section>
);

Signup.propTypes = {
  options: React.PropTypes.shape({
    width: React.PropTypes.string,
  }),
};

Signup.defaultProps = {
  options: {
    width: '100%',
  },
};

export default Signup;
