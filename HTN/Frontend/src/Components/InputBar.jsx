import React from 'react';
import '../App.css'; // Make sure the path is correct

function InputBar({ value, onChange, handleSearch, onClearSearch }) {
  return (
    <div className="input-bar">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Type your query..."
      />
      <div className="input-bar-buttons">
        <button onClick={handleSearch}>Search</button>
        <button onClick={onClearSearch}>Clear</button>
      </div>
    </div>
  );
}

export default InputBar;
