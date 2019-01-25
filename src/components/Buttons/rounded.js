import React from 'react';
import propTypes from 'prop-types';
import './styles.scss';

export default function Rounded({
  color,
  size,
  children,
}) {
  return (
    <button type="button" className="btn rounded" style={{ fontSize: (size), backgroundColor: color }}>
      {children}
    </button>
  );
}

Rounded.propTypes = {
  color: propTypes.string.isRequired,
  size: propTypes.number,
  children: propTypes.object,
};

Rounded.defaultProps = {
  size: 20,
  children: null,
};
