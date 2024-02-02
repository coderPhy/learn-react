import React, { Component } from 'react'
import userContext from './context/user-context'

export class My extends Component {
  render() {
    return (
      <div className='my'>
        <div>my</div>
        <h1>{this.context.color}</h1>
      </div>
    )
  }
}

My.contextType = userContext

export default My