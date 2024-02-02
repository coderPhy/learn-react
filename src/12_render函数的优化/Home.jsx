import React, { Component, PureComponent } from 'react'

export class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            friends: [] 
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.message !== nextProps.message
    // }
  render() {
    console.log("Home render")

    const { message } = this.props
    return (
      <div>
        <h2>Home {message}</h2>
      </div>
    )
  }
}

export default Home