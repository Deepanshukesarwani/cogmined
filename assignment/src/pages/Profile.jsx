import React from 'react'
import Frame  from '../components/sidebar/Frame'
const Profile = () => {
  return (
    // <div>
    //  <Frame/>
    //  <h1>this is a chat page</h1>
    // </div>
    <div className='h-full w-full flex'>

      <Frame/>
      <div className='h-full w-[75%] bg-gray-900 flex justify-center items-center' >
        <div className='w-[40%] h-auto '>

           <h1 className='text-white text-xl text-center'>hello..</h1>
           <h1 className='text-white text-xl text-center'>You are in Profile page</h1>
        </div>
    </div>
    </div>
  )
}

export default Profile
