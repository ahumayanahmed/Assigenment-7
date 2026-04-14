"use client"
import { createContext, useState } from "react";

export const TimelinePageContext=createContext();
const Timelinecontext = ({children}) => {
    const [timepage,settimepage]=useState([])

    const data={
        timepage,
        settimepage,
    };
    return (
       <TimelinePageContext.Provider value={data}>
        {children}
       </TimelinePageContext.Provider>
    );
};

export default Timelinecontext;