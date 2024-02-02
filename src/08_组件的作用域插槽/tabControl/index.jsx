import React, { Component } from 'react'
import "./style.css"

export class TabControl extends Component {
  constructor() {
    super()
    this.state= {
      tabIndex: 0
    }
  }

  tabClickHandler(tabIndex) {
    this.setState({
      tabIndex
    })
    this.props.tabClick(tabIndex)
  }

  render() {
    const { tabs, content } = this.props
    const { tabIndex } = this.state
    return (
      <div className='TabControl'>
        {tabs.map((item, index) => 
          <div 
            key={index} 
            className={`tab ${tabIndex === index}? 'tabActive' : ''`} 
            onClick={() => this.tabClickHandler(index)}
          >{content(item)}</div>)
        }
      </div>
    )
  }
}

export default TabControl
