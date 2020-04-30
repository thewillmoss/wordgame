import React, {FunctionComponent} from 'react'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

type SquareProps = {
    location : number
    color : string
}
export const Square: FunctionComponent<SquareProps> = ({color,location,children}) =>
{
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.TILE,
        drop: ():SquareProps => {return {color, location}},
        canDrop: () => true
    })
    return(
        <div
        ref={drop}
        style={{
            padding:'3%'
        }}>
            <div style={{
                width: '100%',
                height: 0,
                paddingBottom: '100%',
                backgroundColor: color,
                borderRadius:"10%"}}>
                {children}
            </div>
    </div>
    );
}