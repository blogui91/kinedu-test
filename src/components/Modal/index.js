import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function Modal ({show, onClose, children}) {
  const classes = show ? 'modal modal-layer show fade-in-down' : 'modal hide'
  const close = (e) => {
    const modal = document.getElementById('modal-component')
    onClose(e)
    setTimeout(() => {
      modal.classList.add('fade-out-up')
    }, 500);
  }
  return (
    <div id="modal-component" className={classes} onClick={close}>
      <div className="modal-container">{children}</div>
    </div>
  )
}

// TODO: Describe Defaults and required props
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func
}

export default Modal
