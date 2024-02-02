import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <MainBanner></MainBanner>
        <MainProductList></MainProductList>
      </div>
    )
  }
}

export default Main