import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { randomId } from 'src/utils'
function Modal ({show, onClose, children}) {
  const classes = show ? 'modal modal-layer show fade-in-down' : 'modal hide';
  const id =  randomId() + '-' + randomId() + '-' + randomId();
  const close = (e) => {
    const modal = document.getElementById(`modal-${id}`)
    modal.classList.add('fade-out-up')
    setTimeout(() => {
      onClose(e)
    }, 500);
  }
  return (
    <div id={'modal-' + id} className={classes} onClick={close}>
      <div className="modal-container">{children}</div>
    </div>
  )
}

// TODO: Describe Defaults and required props
Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};

export default Modal
