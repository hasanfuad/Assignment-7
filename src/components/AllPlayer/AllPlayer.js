import React from "react";
import './AllPlayer.css'

// bootstrap 
import {Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faPlus } from '@fortawesome/free-solid-svg-icons'

const AllPlayer = (props) => {
  
  const { name, team, image, salary } = props.playerData;
  const handleBtn = props.handleBtn;
  return (
    <div className="all-player-container">
      <div className="all-player-container-image">
          <img src={image} alt={image}/>
      </div>
      <div className="all-player-info">
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <h3>Salary: {salary}$</h3>
        <Button onClick={() => handleBtn(props.playerData)}><FontAwesomeIcon icon={fas, faPlus} /> Add Player</Button>
      </div>
    </div>
  );
};

export default AllPlayer;
