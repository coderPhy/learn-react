import React, { Component } from 'react'
import propTypes from "prop-types"


export class NavBar extends Component {
  render() {
    const { children } = this.props
    return (
      <div className='navBar'>
        <div className='left'>{children[0]}</div>
        <div className='center'>{children[1]}</div>
        <div className='right'>{children[2]}</div>
      </div>
    )
  }
}

NavBar.propTypes = {
    children: propTypes.array
}

export default NavBar