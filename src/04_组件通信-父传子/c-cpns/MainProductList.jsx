import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
    const {title, productList} = this.props
    return (
      <div className='MainProductList'>
        <h2>{title}</h2>
        <ul>
          {
            productList.map(product => 
              <div key={product.acm}>{product.title}</div>
            )
          }
        </ul>
      </div>
    )
  }
}

export default MainProductList