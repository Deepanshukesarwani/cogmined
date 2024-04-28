import React, { useState } from 'react';
import UserList from './UserList'
import user from '../data'
import { useContext } from 'react';
import { Detailcontext } from '../Context/Details';
function sidebar2comp() {
  const res=user;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const[SearchCalled,setSearchCalled]=useState(false);
  const counterState=useContext(Detailcontext);
  const handleSearch = () => {
    const results = res.filter(item => {
      // Check if the ID or username includes the search term
      return (
        item.id.toString().includes(searchTerm) ||
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
    if(searchResults)
    {
      setSearchCalled(true);
      counterState.setdata(results);
    }
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

 

  return (
    <div className='w-full'>

      <div className='w-full h-14 flex items-center '>
      <input
          className="Input rounded-full p-2  h-10 w-5/6 "
          type="text"
          id="firstName"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search ID"

        />
        <div>
          {/* plus icon lagana hai is dv me */}
        </div>
      </div>
     
     {/* message chat component  */}

      <div className='border-2 border-black h-full flex-col gap-7'>
      {res.map((item)=>(
        <div className=' box-border  mt-2'>
          <UserList key={item.id} {...item}></UserList>
        </div>
    ))}
      </div>

       
    </div>
  )
}

export default sidebar2comp
