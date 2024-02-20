import React, { PureComponent } from 'react'
import Card from './pages/Card'

export class App extends PureComponent {
  constructor() {
    super()

    // this.state = {
    //   isLogin: false
    // }
  }
  loginClick() {
    localStorage.setItem("token", "coder")
    // this.setState({
    //   isLogin: true
    // })
    this.forceUpdate()
  }
  render() {
    // const { isLogin } = this.state
    return (
      <div className='app'>
        <h2>App</h2>
        <button onClick={e => this.loginClick()}>login</button>
        {/* { isLogin ? <Card></Card> : "请先登录" } */}
        <Card></Card>
      </div>
    )
  }
}

export default App