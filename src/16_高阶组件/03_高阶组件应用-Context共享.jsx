import React, { PureComponent } from 'react'
import ThemeContext from './context/theme_context'
import Product from './pages/Product'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h2>App</h2>
        <ThemeContext.Provider value={{color: 'red', size: 30}}>
          <Product> </Product>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App