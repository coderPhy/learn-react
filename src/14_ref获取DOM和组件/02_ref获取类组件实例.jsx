import React, { Component, PureComponent, createRef } from 'react'

class Hello extends PureComponent {
  log() {
    console.log("hello");
  }
  render() {
    return 
      (
        <>
          <div className='hello'>hello</div>
        </>
      )
  }
}


export class App extends PureComponent {
    constructor() {
        super()
        this.helloRef = createRef()
    }
    getComponent() {
      this.helloRef.current.log()
    }
    render() {
      return (
        <div className='app'>
          <Hello ref={this.helloRef}></Hello>
          <button onClick={() => this.getComponent()}>获取</button>
        </div>
      )
    }
}

export default App