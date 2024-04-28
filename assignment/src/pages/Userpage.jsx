import React from 'react'
import Frame from '../components/sidebar/Frame'
const Userpage = () => {
  return (
    <div className='h-screen w-screen bg-gray-500 flex'>

      <Frame/>
      <div className='h-full w-3/4 bg-green-600' >
      <h1>user page</h1>
      </div>
    </div>
  )
}

export default Userpage
