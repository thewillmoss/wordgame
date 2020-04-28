import React, {FunctionComponent, ReactNode} from 'react'
import {Square} from './Square'
import {Tile} from './Tile'
import {DragTile} from "./DragTile";
import { useDrop } from 'react-dnd'
import {ItemTypes} from "./Constants";

type FrameProps = {
    letterMap:Map<number,string>
    moveFunction: (tileId:number,loc:number|undefined) => void
}

export const Frame: FunctionComponent<FrameProps> = ({letterMap, moveFunction}) => {

const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TILE,
    drop: () => {return {location:undefined}},
    canDrop: () => true
})
 return(
<div    ref={drop}
        style={{
        width: '100%',
        height: '100%',
        backgroundColor: "saddlebrown",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"center"}} >
        {renderAllTiles(letterMap, moveFunction)}
    </div>
 )
}
let renderAllTiles = (letterMap:Map<number,string>, moveFunction: (tileId:number,loc:number|undefined) => void) => {
    const tiles:ReactNode[] = []
    letterMap.forEach(((value, key) =>
        {tiles.push(
            <div style={{ width: 'calc(100% / 15)', height: 'calc(100% / 15)', padding: "1%"}}>
                <DragTile tileId={key} moveFunction={moveFunction} letter={value}/>
            </div>)}))
    return tiles;
}