import { useState } from "react";
import { createContext } from "react";
export const Detailcontext=createContext(null);

 export const DetailProvider=(props)=>{

    const [data,setdata]=useState([]);
  return (
    <Detailcontext.Provider value={{data,setdata}}>
        {props.children}
    </Detailcontext.Provider>
  )
}
