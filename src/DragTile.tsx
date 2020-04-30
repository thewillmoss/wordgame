import React, {FunctionComponent} from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'
import {Tile} from "./Tile";

type DragTileProps = {
    letter : string
    tileId : number
    moveFunction: (tileId:number,loc:number|undefined) => void
}
export const DragTile: FunctionComponent<DragTileProps> = ({letter, tileId,moveFunction}) =>{
    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.TILE, tileId, letter},
        end : (item, monitor) => monitor.getDropResult()&&moveFunction(tileId, monitor.getDropResult().location),
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return(
        <div
            ref={drag}
            style={{
                width: '100%',
                height: 0,
                paddingBottom: '100%',
                opacity: isDragging ? 0.5 : 1,
                fontSize: '100%',
                fontWeight: 'bold',
                cursor: 'move',
            }}
        >
            <Tile letter = {letter} color = {"darkgoldenrod"}/>
        </div>
    )
}