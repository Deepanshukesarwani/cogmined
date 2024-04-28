import React from 'react'
import Frame  from '../components/sidebar/Frame'
import user from '../data'
import { useContext } from 'react';
import { Detailcontext } from '../Context/Details';
const ChatPage = () => {
  const res=user;
  const dataState=useContext(Detailcontext);
  const userInfo=dataState.data;
  // 
  if(userInfo.length!=0)
  {
    // console.log(userInfo[0].Name); 
  }
  return (

    <div className='min-h-screen w-screen bg-gray-500 flex'>

      <Frame/>
      <div className='h-full w-3/4' >
      
       {userInfo.length !== 0 ? (
        <h1>{userInfo[0].Name}</h1>
      ):( <h1>Chat page</h1>)}
      

      </div>
    </div>
  )
}

export default ChatPage
