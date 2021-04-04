import React, { Component } from 'react';
import Tile from './tile.js'

export default class Map extends Component {

    generateTiles(sideLength=3) {
        let tileArr = []
        for(let y = 0; y < sideLength; y++) {
            for(let x = 0; x < sideLength; x++) {
                let tile = <Tile xcoord={x} ycoord={y}/>
                tileArr.push(tile)
            }
        }
        return tileArr
    }

    render() {
        return(
            <div>
                {this.generateTiles()}
            </div>
        )
    }
}