import React, {Component, CSSProperties} from "react";
import {WordGameUI} from "./WordGameUI";
import { DndProvider } from 'react-dnd'
import MultiBackend, {Preview, PreviewProps} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import './WordGame.css';
import {Tile} from "./Tile";
type WordGameProps = {
}
type WordGameState = {
    board: string[]
    frame: string[]
}
const generatePreview = (item: any, type: string, style: CSSProperties) => {
    if (item.item && item.item.letter) {
        return <div style={{...item.style,width:"10vw"}}>
            <Tile letter={item.item.letter} color={"darkgoldenrod"}/>
        </div>
    }else{
        return <div/>
    }
}
export class WordGame extends Component<WordGameProps, WordGameState> {
    constructor(props: WordGameProps ) {
        super(props)
        this.state = {
            board: charBoard,
            frame: ["A","B","C","D","E","F","G"]
        };
    }
    render() {
        return(
            <DndProvider backend={MultiBackend}
                         options={HTML5toTouch}>
                <Preview generator={generatePreview} />
                <WordGameUI board={this.state.board} frame={this.state.frame}/>
                <Preview generator={generatePreview} />
            </DndProvider>
        )
    }
}
let charBoard : string[]=
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'M', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', 'E', 'N', 'D', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', 'V', ' ', ' ', 'A', 'U', 'G', 'I', 'T', 'E', ' ', ' ',
        ' ', ' ', ' ', ' ', 'O', ' ', ' ', 'D', ' ', 'O', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', 'H', 'M', ' ', 'Z', ' ', 'J', 'E', 'D', 'I', 'S', ' ',
        ' ', ' ', ' ', ' ', 'E', 'Y', 'R', 'E', ' ', 'I', 'W', 'I', ' ', 'T', ' ',
        ' ', ' ', ' ', ' ', ' ', 'X', 'E', 'D', ' ', ' ', ' ', 'Y', 'G', 'O', ' ',
        ' ', ' ', ' ', ' ', ' ', 'O', 'F', ' ', ' ', ' ', ' ', 'A', ' ', 'L', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', 'U', 'N', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
