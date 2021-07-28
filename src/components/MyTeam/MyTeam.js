import React from 'react';

import './MyTeam.css';

const MyTeam = (props) => {
    const myTeam = props.teamData;
    const total = myTeam.reduce((accomulate, total)=> accomulate+total.salary,0)
    return (
        <div>
            <h2>My Team Area</h2>
            <h4>Total Added Player: <span>{myTeam.length}</span></h4>
            <div className="added-player-container">
                <h5>Added Player Name</h5>
                {myTeam.map(data=><ul><li>{data.name}</li></ul>)}
            </div>
            <p>Total Transfer Cost: <span>{total}</span>$</p>
        </div>
    );
};

export default MyTeam;