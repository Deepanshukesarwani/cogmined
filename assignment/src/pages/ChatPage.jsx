import React from "react";
import Frame from "../components/sidebar/Frame";
import user from "../data";
import { useContext } from "react";
import { Detailcontext } from "../Context/Details";
import "./scroll.css";
import MessageCard from "../components/MessageCard";
import ChatSection from "../components/ChatSection";
const ChatPage = () => {
  const res = user;
  const dataState = useContext(Detailcontext);
  const userInfo = dataState.data;
  return (
    <div className="h-full w-full  flex">
      <Frame />
      <div className=" scrol h-full min-w-[75%] bg-gray-900 p-2">
        {userInfo.length !== 0 ? (
          <>
            {dataState.mode ? (
              <>
              <ChatSection data={dataState} mode={dataState.mode}/>
              </>
            ) : (
              <>
                <ChatSection data={dataState}/>
              </>
            )
            }
          </>
        ) : (
          <div className='w-[full] h-full flex justify-center items-center'>
              <div className="w-[40%] h-auto">

          <h1 className='text-white text-xl text-center'>hello..</h1>
           <h1 className='text-white text-xl text-center'>You are in chat  page</h1>
           <h1 className='text-white text-xl text-center'>Tap Chevron button to see chat on Side bar</h1>
              </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
