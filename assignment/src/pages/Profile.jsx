import React from "react";
import Frame from "../components/sidebar/Frame";
import { useContext } from "react";
import { Detailcontext } from "../Context/Details";
import ChatSection from "../components/ChatSection";
const Profile = () => {
  const dataState = useContext(Detailcontext);

  return (
    // <div>
    //  <Frame/>
    //  <h1>this is a chat page</h1>
    // </div>
    <div className="h-full w-full flex">
      <Frame />
      <div className="h-full min-w-[75%] bg-gray-900 p-2">
        {dataState.showProfile ? (
          <>
          <div className="w-[full] h-full flex justify-center items-center">
            <div className="w-[40%] h-auto ">
              <h1 className="text-white text-xl text-center">hello..</h1>
              <h1 className="text-white text-xl text-center">
                You are in Profile page
              </h1>
            </div>
          </div>
          </>
        ) : (
          <>
            {dataState.data.length !== 0 ? (
              <>
                {dataState.mode ? (
                  <>
                    <ChatSection data={dataState} mode={dataState.mode} />
                  </>
                ) : (
                  <>
                    <ChatSection data={dataState} />
                  </>
                )}
              </>
            ) : (
              <>
                <h1 className="text-white"> bug</h1>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
