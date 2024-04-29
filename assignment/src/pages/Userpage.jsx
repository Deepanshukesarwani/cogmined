import React from 'react'
import Frame from '../components/sidebar/Frame'
const Userpage = () => {
  return (
    <div className='h-full w-full flex'>

      <Frame/>
      <div className='h-full  min-w-[75%] bg-gray-900' >
      <h1 className='text-white'>user page</h1>
      </div>
    </div>
  )
}

export default Userpage
