import React, { useState } from "react";
import InputBar from "./InputBar";
import NetworkGraph from "./NetworkGraph"; // Import NetworkGraph
import NetworkGraph2 from "./NetworkGraph2"; // Import NetworkGraph2

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

  return (
    <div className="lookUpContainer">
      {/* First Search Bar */}
      <InputBar
        value={searchQuery1}
        onChange={({ target }) => {
          setSearchQuery1(target.value);
        }}
        handleSearch={handleSearch1}
        onClearSearch={onClearSearch1}
      />

      {/* Conditionally render NetworkGraph if "julian" is typed */}
      {searchQuery1.toLowerCase() === "julian" && (
        <div className="graph-container">
          <NetworkGraph />
        </div>
      )}

      {/* Second Search Bar */}
      <InputBar
        value={searchQuery2}
        onChange={({ target }) => {
          setSearchQuery2(target.value);
        }}
        handleSearch={handleSearch2}
        onClearSearch={onClearSearch2}
      />

      {/* Conditionally render NetworkGraph2 if "Matthew" is typed */}
      {searchQuery2.toLowerCase() === "matthew" && (
        <div className="graph-container">
          <NetworkGraph2 />
        </div>
      )}
    </div>
  );
}

export default UserLookup;
