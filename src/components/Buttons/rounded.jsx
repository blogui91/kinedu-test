import React from 'react'
import propTypes from 'prop-types'
import './styles.scss'
export default function Rounded (props) {
  const { color } = props
  let { size } = props
  if (!size) {
    size = 15
  }
  return (
    <button className="btn rounded" style={{ fontSize: size + 'px', backgroundColor: color }}>
      {props.children}
    </button>
  )
}

Rounded.propTypes = {
  color: propTypes.string.isRequired
}
