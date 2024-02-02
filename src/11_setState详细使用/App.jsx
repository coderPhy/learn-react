import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "hello",
            counter: 0
        }
    }
    changeText() {
        // this.setState({
        //     message: "hhh"
        // })

        // this.setState((state, props) => {
        //     // console.log(state, props);
        //     return {
        //         message: "hhh"
        //     }
        // })

        this.setState({
            message: "zizii"
        }, () => {
            console.log("func:",this.state.message);
        })
        console.log(this.state.message);
    }
    increment () {
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        const { message, counter } = this.state
        return (
        <div>
            <h1>App</h1>
            <div>message: {message}</div>
            <button onClick={e => this.changeText()}>修改文本</button>
            <div>counter: {counter}</div>
            <button onClick={e => this.increment()}>+</button>
        </div>
        )
    }
}

export default App