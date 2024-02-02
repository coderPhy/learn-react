import React, { Component } from 'react'
import ThemeContext from "./context/theme-context"
import UserContext from "./context/user-context"
import Home from './Home'
import About from './About'
import My from './My'

export class App extends Component {
  render() {
    const context = {color: "red"}
    return (
      <div className='App'>
        <h1>App</h1>
        <UserContext.Provider value={{name: "aaa"}}>
            <ThemeContext.Provider value={context}>
                <Home></Home>
                <About></About>
            </ThemeContext.Provider>
        </UserContext.Provider>
        <My></My>
      </div>
    )
  }
}

export default App