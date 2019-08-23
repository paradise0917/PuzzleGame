import React from "react";
import "./index.css";

const Game = (props) => {

    // const [title, setTitle] = useState("");
    // const [important, setImportant] = useState(false);
    // const [urgent, setUrgent] = useState(false);
    // const clearState = () => {
    //     setTitle("");
    //     setImportant(false);
    //     setUrgent(false);
    // };

    const showtile = (item) => {
        return <div key={item.value} onClick={() => {props.checkCanSlack(item);}} className="tile flex flex-jus-center flex-ali-center">
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
    return <div className="outer flex flex-jus-center flex-ali-center"><div className="panel flex flex-jus-center flex-ali-center flex-flow-wrap">{TotalTile}</div></div>;
}

// const Tile =  (props) => {
//     const showtile = 
//         <div key={props.tile.value} className="tile flex flex-jus-center flex-ali-center">
//             <span>{props.tile.value}</span>
//         </div>;
//     const hidetile =
//         <div key={props.tile.value} className="tile flex flex-jus-center flex-ali-center">
//             <span></span>
//         </div>;

//     const title = (props.tile.value < 9) ? ({showtile}):({hidetile});
//     return <div>{title}</div>;
// };

export default Game;