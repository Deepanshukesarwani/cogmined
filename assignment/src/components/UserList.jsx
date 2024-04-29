import React from 'react';
import User from "../data";
import { useContext } from 'react';
import {Detailcontext} from "../Context/Details";
import { useLocation } from "react-router-dom";
const UserList = ({id,Name,Lastchat,ResearchName,receverMsg }) => {

    const res=User;
    const counterState=useContext(Detailcontext);
    const location = useLocation();
    // console.log(counterState);
    
  const ClickHandler=(e)=>{
    const userData=res.filter(item=>{
      return(
        item.id.toString().includes(id)
      )
    });
    // cgthonsole.log(userData);
    if(location.pathname==='/')
    counterState.setdata(userData);
  }
  return (
    <div className='w-full h-16 hover:bg-gray-500 flex gap-1 p-2' onClick={ClickHandler}>
      {/* ye raha result */}
     {
     counterState.mode?(<h3 className='text-white'>{ResearchName}</h3>)
     :(<h3 className='text-white'>{Name}</h3>)
     }
    </div>
  )
}

export default UserList


