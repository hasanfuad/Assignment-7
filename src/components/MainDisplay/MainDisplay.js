import React from "react";
import './MainDisplay.css';

import { useEffect, useState } from "react";

import data from "../../data/data.json";
import AllPlayer from "../AllPlayer/AllPlayer";
import MyTeam from "../MyTeam/MyTeam";

const MainDisplay = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(data);
  }, []);

  const [myTeam, setMyTeam] = useState([]);

  const handleBtn = ((newPlayer)=>{
    const newPlayerAdd = [...myTeam, newPlayer];
    setMyTeam(newPlayerAdd);
  })
  return (
    <div className="player-container">
      <div className="player-info">
        {player.map((playerData) => (
          <AllPlayer playerData={playerData} key={player.id} handleBtn={handleBtn}/>
        ))}
      </div>
      <div className="my-team-container">
        <MyTeam teamData={myTeam}/>
      </div>
    </div>
  );
};

export default MainDisplay;
