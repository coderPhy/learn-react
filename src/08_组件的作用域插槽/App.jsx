import React, { Component } from 'react'
import TabControl from './tabControl/index'

export class App extends Component {
  constructor () {
    super()
    this.state = {
      currentIndex: 0,
      tabs: ["left", "center", "right"]
    }
  }
  tabClick(currentIndex) {
    console.log("currentIndex:", currentIndex)
    this.setState({
      currentIndex
    })
  }
  render() {
    const { tabs, currentIndex } = this.state
    return (
      <div className='app'>
        <TabControl
          tabs={tabs} 
          content={item => <button>{item}</button>}
          currentIndex={currentIndex}
          tabClick={index => this.tabClick(index)}
        ></TabControl>
        <h2>{tabs[currentIndex]}: {currentIndex}</h2>
      </div>
    )
  }
}

export default App