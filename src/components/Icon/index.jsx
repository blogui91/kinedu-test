import React from 'react'
import propTypes from 'prop-types'
function Icon (props) {
  const size = props.size || 20
  const color = props.color || '#000'
  return (
    <i className="material-icons" style={{color, fontSize: size + 'px' }}>{props.name}</i>
  )
}

Icon.propTypes = {
  name: propTypes.string.isRequired,
}

export default Icon
