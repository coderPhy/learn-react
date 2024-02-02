import React, { Component, PureComponent, createRef,
forwardRef } from 'react'

const Hello =  forwardRef(
  function (props, ref) {
    return (<>
      <div className='hello'>
        <div>hello</div>
        <h2 ref={ref}>heihei</h2>
      </div>
    </>)
  }
) 


export class App extends PureComponent {
    constructor() {
        super()
        this.helloRef = createRef()
    }
    getComponent() {
      console.log("ref:", this.helloRef.current )
      // this.helloRef.current.log()
    }
    render() {
      return (
        <div className='app'>
          <div>app</div>
          {/* <Hello ref={this.helloRef}></Hello> */}
          <Hello ref={this.helloRef}></Hello>
          <button onClick={() => this.getComponent()}>获取</button>
        </div>
      )
    }
}

export default App