import React from "react";
import NoteContext from "./ContextApi";
import { useState } from "react";


export const NoteState = (props)=>{
    const [state, setstate] = useState("name")
    const change=(value)=>{
         setstate(value);
    };
    return(
        <NoteContext.Provider value={{state,change}}>
            {props.children}
        </NoteContext.Provider>
    )
}