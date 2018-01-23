import React from 'react';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
  <div>{location.pathname} is not found.</div>
);

NoMatch.propTypes = {
  location: PropTypes.object.isRequired
};

export default NoMatch;
