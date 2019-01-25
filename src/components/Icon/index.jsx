import React from 'react';
import propTypes from 'prop-types';

function Icon({ size, color, name }) {
  return (
    <i className="material-icons" style={{ color, fontSize: `${size  }px` }}>{name}</i>
  );
}

Icon.defaultProps = {
  size: 20,
  color: '#000',
};

Icon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number,
  color: propTypes.string,
};

export default Icon;
