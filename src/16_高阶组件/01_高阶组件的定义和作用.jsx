import React, { PureComponent } from 'react'

function hoc(Cpn) {
    class NewCpn extends PureComponent {
        render() {
            // return <div>NewCpn</div>
            return <Cpn name="cpn"></Cpn>
        }
    }
    return NewCpn
}

class HelloWorld extends PureComponent {
    render() {
        return <div>HelloWorld</div>
    }
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h2>App</h2>
        <HelloWorldHOC />
      </div>
    )
  }
}

export default App