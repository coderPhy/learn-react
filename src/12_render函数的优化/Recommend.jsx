import React, { Component, PureComponent } from 'react'

export class Recommend extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     return nextProps.counter !== this.props.counter
    // }
  render() {
    // counter
    console.log("Recommend render")
    return (
      <div>Recommend {this.props.counter}</div>
    )
  }
}

export default Recommend