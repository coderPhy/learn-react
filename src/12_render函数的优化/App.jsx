import React, { Component, PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            message: "hello",
            counter: 10
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.message !== nextState.message ||
    //      this.state.counter !== nextState.message
    // }
    changeText() {
        this.setState({
            message: "你好",
            // message: "hello"
        })
    }
    increment() {
         this.setState({
            counter: this.state.counter + 1
        })
    }
  render() {
    const { message, counter } = this.state
    console.log("App render")
    
    return (
      <div className='app'>
        <div>App- { message } - { counter }</div>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={ e => this.increment() }>+1</button>
        <Home message={message}></Home>
        <Recommend counter={counter}></Recommend>
        <Profile message={message}></Profile>
      </div>
    )
  }
}

export default App