import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "App component"
    }
  }
  render() {
    // const {message} = this.state
    // 1.react元素 jsx会被编译成react.createElement(), 所以返回的是React元素
    // return <h2>{message}</h2>
    
    // 2.组件或者fragments
    // return ["aaa", "bbb", "ccc"]
    // return [<h1>h1</h1>, <h2>h2</h2>, <h3>h3</h3>]

    // 3.字符串/数字类型
    // return "哈哈哈"
    return 100
  }

}

export default App;
