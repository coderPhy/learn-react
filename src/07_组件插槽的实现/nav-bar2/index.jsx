import React, { Component } from 'react'
import "../nav-bar/style.css"

export class NavBar2 extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot} = this.props
    return (
      <div className='navBar'>
        <div className='left'>{leftSlot}</div>
        <div className='center'>{centerSlot}</div>
        <div className='right'>{rightSlot}</div>
      </div>
    )
  }
}

export default NavBar2
