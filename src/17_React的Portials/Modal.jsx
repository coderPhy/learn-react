import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector("#modal"))
    // return (
    //   <div>Modal</div>
    // //   modal
    // )
  }
}

export default Modal