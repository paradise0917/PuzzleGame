import React from "react";
import "./index.css";

const Rank = (props) => {
    let order = 0;
    const orderRankList = props.ranklist.sort((a,b) => (a.step > b.step) ? 1 : ((b.step > a.step) ? -1 : 0));
    const rank = props.ranklist.length ? 
    (orderRankList.map(item => {
            order++;
            return <div className="row" key={order}>
                <span>{order}</span>
                <span>{item.name}</span>
                <span>{item.step}</span>
            </div>})) : (<div className="row"><span>No Score</span></div>);

    return <div className="outer flex flex-flow-col flex-jus-center flex-ali-center">
                <div className="rank">
                    <div className="row title">
                        <span>Rank</span>
                        <span>Name</span>
                        <span>Steps</span>
                    </div>
                    {rank}
                </div>
            </div>;
}

export default Rank;