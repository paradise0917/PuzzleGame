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
                {"row":0 , "column":0 , "value":1, "hidden":false},
                {"row":0 , "column":1 , "value":2, "hidden":false},
                {"row":0 , "column":2 , "value":3, "hidden":false},
                {"row":1 , "column":0 , "value":4, "hidden":false},
                {"row":1 , "column":1 , "value":5, "hidden":false},
                {"row":1 , "column":2 , "value":6, "hidden":false},
                {"row":2 , "column":0 , "value":7, "hidden":false},
                {"row":2 , "column":1 , "value":8, "hidden":false},
                {"row":2 , "column":2 , "value":9, "hidden":true}
            ]
        };
        // this.changeCategory = this.changeCategory.bind(this);
        // this.changeStatus = this.changeStatus.bind(this);
        // this.addTask = this.addTask.bind(this);
        // this.showAddTask = this.showAddTask.bind(this);
    }

    showAddTask(state){
        this.setState({ showAddPanel: state });
    }

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact render={() => <Game size={this.state.size} tileArray={this.state.tileArray} />} />   
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
