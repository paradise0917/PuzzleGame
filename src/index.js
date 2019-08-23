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
                    <Route path="/" exact render={() => <Game />} />   
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
