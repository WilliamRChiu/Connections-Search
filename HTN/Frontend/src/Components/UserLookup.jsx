import React, { useState } from "react";
import InputBar from "./InputBar";
import NetworkGraph from "./NetworkGraph"; // Import NetworkGraph
import NetworkGraph2 from "./NetworkGraph2"; // Import NetworkGraph2
import '../App.css';  // Import App.css, adjust the path as necessary

function UserLookup() {
  const [searchQuery1, setSearchQuery1] = useState(""); // State for the first input
  const [searchQuery2, setSearchQuery2] = useState(""); // State for the second input

  const handleSearch1 = () => {
    // Logic for first search (optional)
  };

  const handleSearch2 = () => {
    // Logic for second search (optional)
  };

  const onClearSearch1 = () => {
    setSearchQuery1("");
  };

  const onClearSearch2 = () => {
    setSearchQuery2("");
  };

  // Determine which graph to show based on input
  const showNetworkGraph = searchQuery1.toLowerCase() === "julian";
  const showNetworkGraph2 = searchQuery2.toLowerCase() === "matthew";

  return (
    <div className="lookUpContainer">
      <div className="search-bars">
        {/* First Search Bar */}
        <InputBar
          value={searchQuery1}
          onChange={({ target }) => {
            setSearchQuery1(target.value);
          }}
          handleSearch={handleSearch1}
          onClearSearch={onClearSearch1}
        />

        {/* Second Search Bar */}
        <InputBar
          value={searchQuery2}
          onChange={({ target }) => {
            setSearchQuery2(target.value);
          }}
          handleSearch={handleSearch2}
          onClearSearch={onClearSearch2}
        />
      </div>

      {/* Conditionally render one graph at a time */}
      <div className="graph-container">
        {showNetworkGraph && <NetworkGraph />}
        {!showNetworkGraph && showNetworkGraph2 && <NetworkGraph2 />}
      </div>
    </div>
  );
}

export default UserLookup;
