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

export {Info, Step};