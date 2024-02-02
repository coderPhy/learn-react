import React, { Component } from 'react'
import Home from './Home'
import eventBus from './utils/event-bus'


export class App extends Component {
    constructor() {
        super()
        this.state = {
            action: ""
        }
    }

    prevHandler = action => {
        this.setState({action})
        console.log("prevHandler:", action);
    }

    nextHandler = (action) => {
        this.setState({action})
        console.log("next:", action);
    }
    componentDidMount() {
        eventBus.on("prev", this.prevHandler)
        eventBus.on("next", this.nextHandler)
    }
    componentWillUnmount() {
        eventBus.off("prev", this.prevHandler)
        eventBus.off("next", this.nextHandler)
    }
    render() {
        const { action } = this.state
        return (
        <div>
            <h1>App</h1>
            <div>action: {action}</div>
            <Home></Home>
        </div>
        )
    }
}

export default App