import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    findCoordinates = (event) => {
        const myCoords = []
        myCoords.push(event.clientX)
        myCoords.push(event.clientY)
        return this.props.onReceiveCoordinates(myCoords)
    }

    render() {
        return(
            <button onClick={this.findCoordinates}>Mouse Coordinates</button>
        )
    }
}