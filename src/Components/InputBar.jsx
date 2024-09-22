import React from 'react';

function InputBar({ value, onChange, handleSearch, onClearSearch }) {
  return (
    <div className="input-bar">
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Type your @:"
      />
      <div className="input-bar-buttons">
        <button onClick={handleSearch}>Search</button>
        <button onClick={onClearSearch}>Clear</button>
      </div>
    </div>
  );
}

export default InputBar;
