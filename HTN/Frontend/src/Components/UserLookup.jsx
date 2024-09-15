import React, {useState} from "react";
import InputBar from "./InputBar";

function UserLookup(){
    const [searchQuery1, setSearchQuery1] = useState("");
    const [searchQuery2, setSearchQuery2] = useState("");
    const handleSearch1 = ()=>{

    }
    const handleSearch2 = ()=>{

    }
    const onClearSearch1 = ()=>{
        setSearchQuery1("");
    }
    const onClearSearch2 = () =>{
        setSearchQuery2("");
    }
    return(
        <div className="lookUpContainer">
        <InputBar 
        value = {searchQuery1} 
        onChange={({target})=>{
            setSearchQuery1(target.value);
        }}
        handleSearch={handleSearch1}
        onClearSearch={onClearSearch1}/>
        <InputBar 
        value = {searchQuery2} 
        onChange={({target})=>{
            setSearchQuery2(target.value);
        }}
        handleSearch={handleSearch2}
        onClearSearch={onClearSearch2}/>
    </div>
    )
}

export default UserLookup