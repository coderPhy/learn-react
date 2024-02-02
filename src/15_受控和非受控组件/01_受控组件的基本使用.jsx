import React, { Component } from 'react'

export class App extends Component {  
    constructor() {
        super()
        this.state = {
            username: "phy"
        }
    }  
    inputHandler(event) {
        this.setState({
            username: event.target.value
        }, () => {
            console.log(this.state.username)
        })
    }

    render() {
        const { username } = this.state
        return (
        <div className='app'>
            <h1>app</h1>
            <input type='text' value={username} onChange={(e) => this.inputHandler(e)}></input>
            <div>username:{this.state.username}</div>
        </div>
        )
    }
}

export default App