import React, { Component } from 'react';

export default class Tile extends Component {

    render() {
        return(
            <div>
                Tile {this.props.xcoord}, {this.props.ycoord}
            </div>
        )
    }
}