import React, { PureComponent } from 'react'
import Detail from './pages/Detail'
export class App extends PureComponent {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>
        <h2>App</h2>
        <Detail></Detail>
      </div>
    )
  }
}

export default App