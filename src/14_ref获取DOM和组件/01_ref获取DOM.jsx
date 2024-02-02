import React, { Component, PureComponent, createRef } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.titleRef = createRef()
    }
    getDom() {
        // 第一种
        // console.log(this.refs.phy)

        // console.log(this.titleRef.current)

        console.log("this.titleEl:", this.titleEl)
    }
  render() {
    return (
      <div className='app'>
        <h2 ref="phy">hhh</h2>
        <h2 ref={this.titleRef}>jjj</h2>
        <h2 ref={(e) => {
            this.titleEl = e
        }}>zzz</h2>
        <button onClick={() => this.getDom()}>获取</button>
      </div>
    )
  }
}

export default App