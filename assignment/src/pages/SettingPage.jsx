import React,{useEffect} from 'react'
import Frame from '../components/sidebar/Frame'
import { useContext } from "react";
import { Detailcontext } from "../Context/Details";
import ChatSection from '../components/ChatSection';
import { useState } from 'react';
// import { useEffect } from 'react';
const SettingPage = () => {
  const dataState = useContext(Detailcontext);
  const user=dataState;
  const userdata=[];
  // useEffect(()=>{
  //   user.setdata([]);
  // },[])
  const [info,setInfo]=useState([]);
  
  return (
    <div className='h-full w-full flex'>

    <Frame/>
    <div className='h-full w-[75%] bg-gray-900 p-2' >
    {
      dataState.showsetting ?(
      <>
       <div className='w-[40%] h-auto '>

      <h1 className='text-white text-xl text-center'>hello..</h1>
       <h1 className='text-white text-xl text-center'>You are in Setting page</h1>
</div>
      </>
      ):(
      <>
       {
        dataState.data.length !==0 ?(
          <>
            {/* <ChatSection data={dataState} mode={dataState.mode}/> */}
            {
              dataState.mode ?(
                <>
                  <ChatSection data={dataState} mode={dataState.mode}/>
                </>
              ):(
              <>
                  <ChatSection data={dataState}/>
              </>
              )
            }
          </>
        ):(
        <>
          <h1 className='text-white'> bug</h1>
        </>
        )
       }
      </>
      )
    }
      
    </div>
  </div>
  )
}

export default SettingPage
