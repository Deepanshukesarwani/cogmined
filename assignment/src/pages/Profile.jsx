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
      <div className='h-full min-w-[75%] bg-gray-900' >
      <h1 className='text-white'>Profile page</h1>
      </div>
    </div>
  )
}

export default Profile
