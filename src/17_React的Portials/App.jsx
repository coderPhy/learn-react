import React, { PureComponent } from 'react'
import { createPortal } from "react-dom"
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App h1</h1>
        {/* <h2>App h2</h2> */}
        {
            createPortal(<h2>App h2</h2>, document.querySelector("#root2"))
        }
        <Modal>
            <h1>title</h1>
            <h2>text</h2>
        </Modal>
      </div>
    )
  }
}

export default App