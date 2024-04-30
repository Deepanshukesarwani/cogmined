import { useState } from "react";
import { createContext } from "react";
export const Detailcontext=createContext(null);

 export const DetailProvider=(props)=>{

    const [data,setdata]=useState([]);
    const [mode,setmode]=useState(false);
    const [showsetting,setShowSetting]=useState(false);
    const[showProfile,setShowProfile]=useState(false);
    const [showUser,setShowUser]=useState(false);
  return (
    <Detailcontext.Provider value={{data,setdata,mode,setmode,showsetting,setShowSetting,showProfile,setShowProfile,showUser,setShowUser}}>
        {props.children}
    </Detailcontext.Provider>
  )
}
