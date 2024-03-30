import React from "react";
import "../Styles/Homepage.css";
import { CiSearch } from "react-icons/ci";

import CardContainer from "./CardContainer";

function Homepage({setSelectedItem}) {

  return (
    <div>
      <div className="main">
        <h1>Social Media For Travellers</h1>
        <div className="search">
          <CiSearch className="serach-icon" style={{ cursor: 'pointer' }}/>
          <input type="text" placeholder="Search here..." />
        </div>
        <CardContainer setSelectedItem={setSelectedItem}/>
      </div>
    </div>
  );
}

export default Homepage;
