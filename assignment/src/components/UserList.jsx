import React from 'react';
import User from "../data";
import { useContext } from 'react';
import {Detailcontext} from "../Context/Details";
import { Link,useLocation } from "react-router-dom";
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
    // if(location.pathname==='/')
    counterState.setdata(userData);
    counterState.setShowSetting(false);
    counterState.setShowProfile(false);
    counterState.setShowUser(false);
  }
  return (
    <>
    
    <div className='w-full h-16 hover:bg-gray-700 flex gap-1 p-2' onClick={ClickHandler}>
      {/* ye raha result */}
     
     {
     counterState.mode?(
      <>
      <div className='w-[100%]'>

     <h6 className='text-white text-base'>{ResearchName}</h6>
     <p className='text-white text-xs'>User: {Name}</p>
      </div>
      </>
     )
     :(
      <>
      <div className='w-full'>
         <h6 className='text-white text-base w-full'>{Name}</h6>
         <p className='text-white text-xs'> id:  {id}</p>
      </div>
      </>
     )
     }
    </div>
    
    </>
  )
}

export default UserList


