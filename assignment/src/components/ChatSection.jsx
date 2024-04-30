import React from 'react'
import MessageCard from './MessageCard'

const ChatSection = ({data,mode}) => {
  return (
    <>
      <div className="h-[10%]">
                  <h1 className="text-white text-xl">{data.data[0].Name}</h1>

                  {/* if condtion on the basis of mode  */}
                  {
                    mode?(<p className="text-white">{data.data[0].ResearchName}</p>):(<p className="text-white">Chat</p>)
                  }
                  
                  <div className="w-full flex">
                    <hr className="w-[42%]" />
                    <h className="w-[20%] text-white text-center text-2xl ">
                      Today
                    </h>
                    <hr className="w-[42%]" />
                  </div>
                </div>
                <div className="min-h-[83%]">
                  {/* chat message container  */}

                  <MessageCard/>
                </div>
                <div className=" h-[7%] flex justify-center">
                  <input
                    type="text"
                    className="w-[85%] rounded-full h-[80%] p-4  bg-gray-700 text-white"
                    placeholder="Type your message here.."
                  />
                <div className=" w-14 h-14 flex justify-center items-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="45"
                    viewBox="0 -960 980 980"
                    width="45"
                    className=""
                  >
                    <path fill="white" d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
                  </svg>
                  </div>
                </div>
    </>
  )
}

export default ChatSection
