import React, { useState, useEffect } from "react";
import InputBar from "./InputBar"; // Ensure correct import paths
import NetworkGraph from "./NetworkGraph"; 
import NetworkGraph2 from "./NetworkGraph2"; 

function UserLookup() {
  const [searchQuery1, setSearchQuery1] = useState(""); // State for the first input
  const [searchQuery2, setSearchQuery2] = useState(""); // State for the second input
  const [showGraph, setShowGraph] = useState(false); // State to show the graph
  const [graphType, setGraphType] = useState(null); // Determine which graph to show

  const delay = 3500; // 2 seconds delay

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery1.toLowerCase() === "julianzhang_") {
        setGraphType("networkGraph");
        setShowGraph(true);
      } else if (searchQuery2.toLowerCase() === "mattew5000") {
        setGraphType("networkGraph2");
        setShowGraph(true);
      } else {
        setShowGraph(false);
      }
    }, delay); // Delay the graph rendering

    return () => clearTimeout(timer); // Cleanup the timer
  }, [searchQuery1, searchQuery2]); // Run the effect when search queries change

  const handleSearch1 = () => {
    // Logic for first search (optional)
  };

  const handleSearch2 = () => {
    // Logic for second search (optional)
  };

  const onClearSearch1 = () => {
    setSearchQuery1("");
    setShowGraph(false); // Hide graph on clear
  };

  const onClearSearch2 = () => {
    setSearchQuery2("");
    setShowGraph(false); // Hide graph on clear
  };

  return (
    <>
      <div className="lookUpContainer">
        {/* Search bars container (side by side) */}
        <div className="search-bars">
          <InputBar
            value={searchQuery1}
            onChange={({ target }) => {
              setSearchQuery1(target.value);
            }}
            handleSearch={handleSearch1}
            onClearSearch={onClearSearch1}
          />

          <InputBar
            value={searchQuery2}
            onChange={({ target }) => {
              setSearchQuery2(target.value);
            }}
            handleSearch={handleSearch2}
            onClearSearch={onClearSearch2}
          />
        </div>
      </div>

      {/* Conditionally render one graph at a time after the delay */}
      <div className="graph-container">
        {showGraph && graphType === "networkGraph" && <NetworkGraph />}
        {showGraph && graphType === "networkGraph2" && <NetworkGraph2 />}
      </div>
    </>
  );
}

export default UserLookup;
