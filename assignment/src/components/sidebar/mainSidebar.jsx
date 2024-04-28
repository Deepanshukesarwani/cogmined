import React from 'react'
import Sidebar1comp from '../sidebar1comp'
import Sidebar2comp from '../sidebar2comp'
function mainSidebar() {
  return (
    <aside className='h-screen bg-indigo-300 w-1/4 flex'>
      <Sidebar1comp/>
      <Sidebar2comp/>
    </aside>
  )
}

export default mainSidebar
