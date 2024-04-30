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
  }
  return (
    <>
    
    <div className='w-full h-16 hover:bg-gray-700 flex gap-1 p-2' onClick={ClickHandler}>
      {/* ye raha result */}
     
     {
     counterState.mode?(
      <>
      <div className='w-[100%]'>

     <h3 className='text-white'>{ResearchName}</h3>
     <p className='text-white'>User: {Name}</p>
      </div>
      </>
     )
     :(
      <>
      <div className='w-full'>
         <h3 className='text-white  w-full'>{Name}</h3>
         <p className='text-white'> id:  {id}</p>
      </div>
      </>
     )
     }
    </div>
    
    </>
  )
}

export default UserList


