
import './UserDashboard.css';
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import LooksOne from "@material-ui/icons/LooksOne";
import LooksTwo from "@material-ui/icons/LooksTwo";
import Looks3 from "@material-ui/icons/Looks3";

const TREES_PLANTED = 12; //! TEMP VALUE
const CARBON_SAVED = 3; //! TEMP VALUE
const MONEY_RAISED = 25; //! TEMP VALUE



const UserDashboard = () => {
  
    return (
      <>
        <div className="UserDashboard">
        <ul className="UserCards">
          <li>
            <img src="growingtree.gif" alt="growing tree" />
            <div className="UserCard">
              <LooksOne />
              <h3>Your Total Trees Planted:</h3>
              <p>{TREES_PLANTED}</p>
            </div>
          </li>
          <li>
            <img src="foot.png" alt="carbon footprint" />
            <div className="UserCard">
              <LooksTwo />
              <h3>Your Carbon Saved:</h3>
              <p>{CARBON_SAVED} kg</p>
            </div>
          </li>
          <li>
            <img src="pig.png" alt="piggy bank" />
            <div className="UserCard">
              <Looks3 />
              <h3>Your Total Donations:</h3>
              <p>£{MONEY_RAISED}</p>
            </div>
          </li>
        </ul>

        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#DBB95F" }}
          onClick={() => {
            console.log("Donate button was clicked");
          }}
        >
          Donate
        </Button>
        </div>
        
      </>
        
      
    )
}

export default UserDashboard
