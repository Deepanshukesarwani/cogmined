import React from 'react'
import User from "../data"
import { useContext } from 'react';
import {Detailcontext} from "../Context/Details"
const UserList = ({id,Name,Lastchat,ResearchName,receverMsg }) => {
    const res=User;
    const counterState=useContext(Detailcontext);
    // console.log(counterState);
  const ClickHandler=(e)=>{
    const userData=res.filter(item=>{
      return(
        item.id.toString().includes(id)
      )
    });
    // cgthonsole.log(userData);
    counterState.setdata(userData);
  }
  return (
    <div className='w-full h-16 border-2 flex gap-1 bg-blue-600' onClick={ClickHandler}>
      {/* ye raha result */}
      <h3>{Name}</h3>
    </div>
  )
}

export default UserList
