import React, { Component } from 'react';

export default class DelayedButton extends Component {

    makeDelay = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }
    render() {
        return(
            <button onClick={this.makeDelay}>Delay</button>
        )
    }
}