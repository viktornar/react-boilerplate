import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <h1>{ title }</h1>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
