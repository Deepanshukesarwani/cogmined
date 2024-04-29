import React from 'react'
import Frame  from '../components/sidebar/Frame'
import user from '../data'
import { useContext } from 'react';
import { Detailcontext } from '../Context/Details';
import "./scroll.css"


const ChatPage = () => {
  const res=user;
  const dataState=useContext(Detailcontext);
  const userInfo=dataState.data;
  
  // 

  return (

    <div className='h-full w-full  flex'>

      <Frame/>
      <div className=' scrol h-full min-w-[75%] bg-gray-900 p-2'  >
      
       {userInfo.length !== 0 ? (
        <>
         <h1 className='text-white text-xl' >{userInfo[0].Name}</h1>
         <br />
        <div className='w-full flex'>
            <hr className='w-[42%]'/>
            <h className="w-[20%] text-white text-center text-2xl ">Today</h>
            <hr className='w-[42%]'/>
        </div>
        </>
       


      ):( <h1 className='text-white'>Chat page</h1>)}
      

      </div>
    </div>
  )
}

export default ChatPage
