import React, {FunctionComponent} from 'react'

type TileProps = {
    letter : string,
    color?:string
}
const tileStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    color: "#3b2c13",
    borderRadius: "10%",
    height: "0",
    paddingBottom: "100%",
}
const labelStyle : React.CSSProperties = {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

export const Tile: FunctionComponent<TileProps> = ({letter,color}) =>
        <div style = {{
            ...tileStyle,
            backgroundColor: color ? color : "#D2B48C"
        }}>
            <div style = {labelStyle}>
                {letter}<sub>1</sub>
            </div>
        </div>
