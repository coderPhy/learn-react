import React, { Component } from 'react'
import NavBar from './nav-bar'
import "./nav-bar/style.css"
import NavBar2 from './nav-bar2'

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar>
            <button>按钮</button>
            <h2>标题</h2>
            <i>iii</i>
        </NavBar>
        <hr/>
        <NavBar2
            leftSlot={<div>hhh</div>}
            centerSlot={<h2>title</h2>}
            rightSlot={<i>i</i>}
        />

      </div>
    )
  }
}

export default App