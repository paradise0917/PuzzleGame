import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";


import Navbar from "./Navbar/index.js";
// import {Info, Step} from "./Info/index.js";
import Game from "./Game/index.js";
import Rank from "./Rank/index.js";


import "./common.css";
import "./index.css";


class App extends React.Component { 

    constructor(props) {
        super(props);
        this.state = { 
            size: 3,
            tileArray: [
                {row:0 , col:0 , value:1},
                {row:0 , col:1 , value:2},
                {row:0 , col:2 , value:3},
                {row:1 , col:0 , value:4},
                {row:1 , col:1 , value:5},
                {row:1 , col:2 , value:6},
                {row:2 , col:0 , value:7},
                {row:2 , col:1 , value:8},
                {row:2 , col:2 , value:9}
            ],
            ranklist: [],
            start: false,
            userName: "",
            useStep: 0
        };

        this.startGame = this.startGame.bind(this);
        this.endGame = this.endGame.bind(this);
        this.randomOrder = this.randomOrder.bind(this);
        this.checkCanSlack = this.checkCanSlack.bind(this);
        this.checkTop = this.checkTop.bind(this);
        this.checkRight = this.checkRight.bind(this);
        this.checkBottom = this.checkBottom.bind(this);
        this.checkLeft = this.checkLeft.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.getLocalStorageToState = this.getLocalStorageToState.bind(this);
        this.setLocalStorageFromState = this.setLocalStorageFromState.bind(this);
    }

    componentDidMount() {
        this.getLocalStorageToState();

        // const PrivateRoute =  this.state.completeGame ? <Route { ...props } />: <Redirect to="/login" />
    }

    startGame(userName){
        this.setState({ start: true, userName: userName, useStep: 0});
        this.randomOrder();
        this.getLocalStorageToState();
    }

    endGame(){
        this.state.ranklist.push({name: this.state.userName, step: this.state.useStep});
        this.setState({ start: false, ranklist: this.state.ranklist });
        this.setLocalStorageFromState();
    }

    randomOrder(){
        let randomArray = [];
        // for(let i=1; i <= this.state.size * this.state.size; i++)
        //     randomArray.push(i);
        // randomArray.sort(() => Math.random() - 0.5);
        randomArray = [1,2,3,4,5,9,7,8,6];

        this.state.tileArray.forEach(item => {
            item.value = randomArray[0];
            randomArray.shift();
        });

        // Update State
        // console.log(this.state.tileArray);
        this.setState({ tileArray: this.state.tileArray });
    }

    checkCanSlack(clickitem){
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
            // console.log(this.state.tileArray);
            this.setState({ tileArray: this.state.tileArray, useStep: (this.state.useStep + 1) });

            // check win
            if(this.checkWin()){
                alert(this.state.userName + ", you win ٩(^ᴗ^)۶");
                this.endGame();
            }
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

    checkWin(){
        for(let i=0; i < this.state.size * this.state.size; i++){
            if(this.state.tileArray[i].value !== i+1){
                return false;
            }
        }
       return true;
    }

    getLocalStorageToState(){
        let data = localStorage.getItem("rank");
        if(data !== null){
            this.setState({ ranklist: JSON.parse(data)});
        }
        else{
            this.setState({ ranklist: []});
        }
    }

    setLocalStorageFromState(){
        localStorage.setItem("rank", JSON.stringify(this.state.ranklist));
    }

    setRankInfo(){

    }

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact render={() => <Game 
                                                            size={this.state.size} 
                                                            tileArray={this.state.tileArray} 
                                                            checkCanSlack={this.checkCanSlack}
                                                            start={this.state.start}
                                                            startGame={this.startGame}
                                                            userName={this.state.userName} 
                                                            useStep={this.state.useStep}
                                                             />} />   
                    <Route path="/rank" render={() => <Rank ranklist={this.state.ranklist} getLocalStorageToState={this.getLocalStorageToState} />}/>   
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
