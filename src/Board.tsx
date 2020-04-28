import React, {FunctionComponent, ReactNode} from 'react'
import {Square} from './Square'
import {Tile} from './Tile'
import {DragTile} from "./DragTile";

type BoardProps = {
    tileIndexToLetter:Map<number, string>
    activeTileLocMap:Map<number, number> //if number is in set, make that tile active
    moveFunction: (tileId:number,loc:number|undefined) => void
}

export const Board: FunctionComponent<BoardProps> = ({tileIndexToLetter,activeTileLocMap,moveFunction}) =>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',}}>
        {renderAllSquares(tileIndexToLetter,activeTileLocMap, moveFunction)}
    </div>

let renderAllSquares = (tileIndexToLetter:Map<number, string>,activeTileLocMap:Map<number, number> , moveFunction: (tileId:number,loc:number|undefined) => void) => {
    console.log(activeTileLocMap.keys())
    const squares:ReactNode[] = []
    for(let i = 0; i < 15*15; i++){
        if(tileIndexToLetter.has(i))
            squares.push(renderSquare(i, renderTile(i, tileIndexToLetter, activeTileLocMap, moveFunction)))
        else
            squares.push(renderSquare(i))
    }
    return squares;
}
let renderSquare = (i:number, tile?:ReactNode) => {
    const color = squareColor(i)
    return (
        <div key={i} style={{ width: 'calc(100% / 15)', height: 'calc(100% / 15)', backgroundColor: "#e9dabd"}}>
            <div style ={{padding:"2%"}}>
                <Square location={i} color = {color}>
                    {tile}
                </Square>
            </div>
        </div>
    )
}
let renderTile = (i:number, tileIndexToLetter:Map<number, string>, activeTileLocMap:Map<number, number>, moveFunction: (tileId:number,loc:number|undefined) => void) => {
    const hasLetter = tileIndexToLetter.has(i)
    const activeTile = activeTileLocMap.has(i)
    if(hasLetter){
        if(activeTile){
            return <DragTile letter={tileIndexToLetter.get(i) as string} tileId={activeTileLocMap.get(i) as number}
                             moveFunction={moveFunction}/>
        }else{
            return <Tile letter = {tileIndexToLetter.get(i) as string}/>
        }
    }
}
let squareColor = (i:number) =>{
    const x = i % 15
    const y = Math.floor(i / 15)
    if(WORD_MULTIPLIER[y][x]==3)
        return "#9D6055";
    else if(WORD_MULTIPLIER[y][x]==2)
        return "#D2AFB5"
    else if(LETTER_MULTIPLIER[y][x]==3)
        return "#05A4CB"
    else if(LETTER_MULTIPLIER[y][x]==2)
        return "#B6CBCC"

        return "#DDC7A9"
}

let LETTER_MULTIPLIER: number[][] =
    [ 	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
        [1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
        [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
        [1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
        [1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

let WORD_MULTIPLIER: number[][] =
    [   [3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 3],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
        [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
        [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
        [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
        [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        [3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 3] ];