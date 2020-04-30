import React, { Component } from 'react';
import {Board} from "./Board";
import {Frame} from "./Frame";
import './App.css';
type WordGameUIProps = {
    board:string[]
    frame:string[]
}
interface activeTile{
    letter:string,
    loc?:number,
}
type WordGameUIState = {
    activeTiles:activeTile[]
}
export class WordGameUI extends Component<WordGameUIProps, WordGameUIState> {
    constructor(props: WordGameUIProps) {
        super(props);
        this.state={
            activeTiles:this.resetActiveTiles(this.props.frame)
        }
        this.moveTile = this.moveTile.bind(this)
    }
    //returns all tiles to frame
    resetActiveTiles(frame: string[]){
        console.log(frame);
        let tiles:activeTile[] = [];
        for(let i = 0; i < frame.length; i++){
            tiles.push({letter:frame[i]}) //add new active tile with no location data
        }
        return tiles;
    }
    moveTile(tileID:number, loc:number|undefined){
        console.log("tileID:",tileID);
        console.log("loc:",loc);
        console.log(this.props.frame);
        if(this&&this.state&&this.state.activeTiles){
            let tileArray = this.state.activeTiles;
            if(!loc){
                tileArray[tileID].loc = undefined;
                this.setState({activeTiles:tileArray})
            }else if(this.props.board[loc]&&this.props.board[loc]==' '){
                for(let i = 0; i < tileArray.length; i++) {
                    if(tileArray[i].loc===loc){
                        tileArray[i].loc = undefined;
                    }
                }
                if(tileArray[tileID])
                    tileArray[tileID].loc = loc
                this.setState({activeTiles:tileArray})
            }
        }
    }
    getTileIdNoLocToLetter(tileArray:activeTile[]){
    let tileLettersNoLocation:Map<number, string> = new Map<number, string>();
        for(let i = 0; i < tileArray.length; i++) {
            if(!tileArray[i].loc){
                tileLettersNoLocation.set(i,tileArray[i].letter);
            }
        }
        return tileLettersNoLocation;
    }
    tileLocToID(frameToMap:activeTile[]){
        let activeLocations = new Map<number, number>();
        for(let i = 0; i< frameToMap.length; i++){
            if(frameToMap[i].loc)
                activeLocations.set(frameToMap[i].loc as number, i)
        }
        return activeLocations
    }
    createLetterMap(boardToMap:string[], frameToMap:activeTile[]){
        let letterMap = new Map<number, string>();
        for(let i = 0; i < boardToMap.length; i++){
            if(boardToMap[i]!=' '){
                letterMap.set(i, boardToMap[i])
            }
        }
        for(let i = 0; i< frameToMap.length; i++){
            letterMap.set(frameToMap[i].loc as number, frameToMap[i].letter)
        }
        return letterMap
    }
    render() {
        return <div className="UI">
            <br/>
                <Board activeTileLocMap={this.tileLocToID(this.state.activeTiles)}
                       tileIndexToLetter={this.createLetterMap(this.props.board,this.state.activeTiles)}
                       moveFunction={this.moveTile}/>
                <Frame letterMap={this.getTileIdNoLocToLetter(this.state.activeTiles)} moveFunction={this.moveTile}/>
        </div>
    }
}