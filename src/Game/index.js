import React,{ useState } from "react";
import "./index.css";


const Info = (props) => {

    const [name, setName] = useState("");
    const clearState = () => {
        setName("");
    };

    const info = <div className={props.start ? "userInfo ishidden" : "userInfo"}>
            <span>Name : </span>
            <input type="text" placeholder="Please enter your name..." value={name} onChange={(e) => setName(e.target.value)} />
            <button className="btn-start" onClick={()=>{props.startGame(name);clearState();}}>START GAME</button>
        </div>;
    return <div className="outer flex flex-jus-center flex-ali-center">{info}</div>;
}

const Step = (props) => {
    const step = <div className={props.start ? "" : "ishidden"}>
            <span>Name:{props.userName}</span> / 
            <span> Step:{props.useStep}</span>
        </div>;
    return <div className="outer flex flex-jus-center flex-ali-center">{step}</div>;
}


const Game = (props) => {

    const showtile = (item) => {
        return <div key={item.value} onClick={props.start ? () => {props.checkCanSlack(item);} : ()=>{console.log("Please enter your name first.")}} className="tile flex flex-jus-center flex-ali-center">
            <span>{item.value}</span>
        </div>};

    const hidetile = (item) => {
        return <div key={item.value} className="tile tile-empty flex flex-jus-center flex-ali-center">
            <span></span>
        </div>};

    const TotalTile = props.tileArray.length ? 
    (props.tileArray.map(item => { 
        return (item.value < 9) ? showtile(item) : hidetile(item)
    })) : (<div>Empty Tile Array</div>);
    return <div className="outer flex flex-flow-col flex-jus-center flex-ali-center">
                <Info start={props.start} startGame={props.startGame} />
                <Step start={props.start} userName={props.userName} useStep={props.useStep} />
                <div className="panel flex flex-jus-center flex-ali-center flex-flow-wrap">{TotalTile}</div>
            </div>;
}

export default Game;