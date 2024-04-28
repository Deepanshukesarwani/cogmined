import React from 'react'
import Sidebar1comp from '../sidebar1comp'
import Sidebar2comp from '../sidebar2comp'
function Frame() {
  return (
    <>
    <div className='min-h-screen bg-indigo-300 w-1/4 flex'>
      <Sidebar1comp/>
      <Sidebar2comp/>
    </div>
    </>
  )
}

export default Frame
