import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {IoMdClose} from "react-icons/io"

function InputBar({value, onChange, handleSearch, onClearSearch}) {
    return(
        <div className="inputContainer">
            <input type='text' placeholder = "Search Users" className="searchBar"
            value = {value}
            onChange = {onChange}/>

            {value&&(
                <IoMdClose className="closeButton" onClick={onClearSearch}/>)}

            <FaMagnifyingGlass className="magnGlass" onClick={handleSearch}/>
        </div>
    )
    
}
export default InputBar