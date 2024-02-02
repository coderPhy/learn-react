import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import userContext from './context/user-context'

export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Home</h1>
        <div>{this.context.color}</div>
        <userContext.Consumer>
          {value => <h1>{value.name}</h1>}
        </userContext.Consumer>
      </div>
    )
  }
}

Home.contextType = ThemeContext

export default Home