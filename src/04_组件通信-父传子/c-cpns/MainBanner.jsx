import React, { Component } from 'react'
import PropTypes from "prop-types"

export class MainBanner extends Component {
  static defaultProps = {
    title: "aaa",
    banners: []
  }
   
  render() {
    return (
      <div className='MainBanner'>
        <h2>{this.props.title}</h2>
        <div className='banners'>
          {this.props.banners.map(banner => 
            <div className='banner' key={banner.acm}>
              {banner.title}</div>)}
        </div>
      </div>
    )
  }
}

MainBanner.propTypes = {
  // banners: PropTypes.array.isRequired,
  banners: PropTypes.array,
  title: PropTypes.string
}

// MainBanner.defaultProps = {
//   title: "aaa",
//   banners: []
// }

export default MainBanner