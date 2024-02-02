import React, { Component } from 'react'
import eventBus from './utils/event-bus'

export class HomeBanner extends Component {
    prevClick() {
        eventBus.emit("prev", "prev")
    }
    nextClick() {
        eventBus.emit("next", "next")
    }
    render() {
        return (
            <div>
                <h3>HomeBanner</h3>
                <button onClick={this.prevClick}>prev</button>
                <button onClick={this.nextClick}>next</button>
            </div>
        )
    }
}

export default HomeBanner