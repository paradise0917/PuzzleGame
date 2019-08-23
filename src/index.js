import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar/index.js";
import Game from "./Game/index.js";
import Rank from "./Rank/index.js";

import "./common.css";
import "./index.css";


class App extends React.Component { 

    constructor(props) {
        super(props);
        this.state = { 
            size: 3,
            tileArray :[
                {row:0 , col:0 , value:1},
                {row:0 , col:1 , value:2},
                {row:0 , col:2 , value:3},
                {row:1 , col:0 , value:4},
                {row:1 , col:1 , value:5},
                {row:1 , col:2 , value:6},
                {row:2 , col:0 , value:7},
                {row:2 , col:1 , value:8},
                {row:2 , col:2 , value:9}
            ]
        };
        // this.changeCategory = this.changeCategory.bind(this);
        // this.changeStatus = this.changeStatus.bind(this);
        // this.addTask = this.addTask.bind(this);
        // this.showAddTask = this.showAddTask.bind(this);
        this.checkCanSlack = this.checkCanSlack.bind(this);
        this.checkTop = this.checkTop.bind(this);
        this.checkRight = this.checkRight.bind(this);
        this.checkBottom = this.checkBottom.bind(this);
        this.checkLeft = this.checkLeft.bind(this);
    }

    checkCanSlack(clickitem){
        console.log(clickitem);
        const checkTopResult = this.checkTop(clickitem.row, clickitem.col);
        const checkRightResult = this.checkRight(clickitem.row, clickitem.col);
        const checkBottomResult = this.checkBottom(clickitem.row, clickitem.col);
        const checkLeftResult = this.checkLeft(clickitem.row, clickitem.col);
        if(checkTopResult || checkRightResult || checkBottomResult || checkLeftResult){

            const clickval = clickitem.value;
            const emptyItem = this.state.tileArray.filter(item => item.value === 9)[0];
            const emptyIndex = this.state.tileArray.indexOf(emptyItem);
            this.state.tileArray[emptyIndex].value = clickval;

            const itemIndex = this.state.tileArray.indexOf(clickitem);
            this.state.tileArray[itemIndex].value = 9;

            // Update State
            console.log(this.state.tileArray);
            this.setState({ tileArray: this.state.tileArray });
        }

    }

    checkTop(curRow, curCol){
        const newRow = curRow - 1;
        if(newRow >=0){
            const TopTile = this.state.tileArray.filter(item => item.row === newRow && item.col === curCol)[0];
            if(TopTile.value === 9){
                return true;
            }
        }
        return false;
    }

    checkRight(curRow, curCol){
        const newCol = curCol + 1;
        if(newCol < this.state.size){
            const RightTile = this.state.tileArray.filter(item => item.row === curRow && item.col === newCol)[0];
            if(RightTile.value === 9){
                return true;
            }
        }
        return false;
    }

    checkBottom(curRow, curCol){
        const newRow = curRow + 1;
        if(newRow < this.state.size){
            const BottomTile = this.state.tileArray.filter(item => item.row === newRow && item.col === curCol)[0];
            if(BottomTile.value === 9){
                return true;
            }
        }
        return false;
    }

    checkLeft(curRow, curCol){
        const newCol = curCol - 1;
        if(newCol >= 0){
            const BottomTile = this.state.tileArray.filter(item => item.row === curRow && item.col === newCol)[0];
            if(BottomTile.value === 9){
                return true;
            }
        }
        return false;
    }

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact render={() => <Game size={this.state.size} tileArray={this.state.tileArray} checkCanSlack={this.checkCanSlack} />} />   
                    <Route path="/rank" render={() => <Rank />}/>   
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
