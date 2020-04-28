import React, {Component} from "react";
import {WordGameUI} from "./WordGameUI";
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

type WordGameProps = {
}
type WordGameState = {
    board: string[]
    frame: string[]
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
            <DndProvider backend={Backend}>
                <div className = "UI">
                    <WordGameUI board={this.state.board} frame={this.state.frame}/>
                </div>
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
