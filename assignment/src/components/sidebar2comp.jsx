import React from 'react'
import UserList from './UserList'

function sidebar2comp() {
  return (
    <div className='w-full'>

      <div className='w-full h-14 flex items-center border-2'>
      <input
          className="Input rounded-full p-2  h-10 w-5/6 "
          type="text"
          id="firstName"
          // defaultValue="Pedro Duarte"
          placeholder="Search ID"
        />
        <div>
          {/* plus icon lagana hai is dv me */}
        </div>
      </div>
     
     {/* message chat component  */}

      <div>
      <UserList/>
      </div>

       
    </div>
  )
}

export default sidebar2comp
