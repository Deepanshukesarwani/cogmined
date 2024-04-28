import React from 'react'
import { Route, Routes } from "react-router-dom";
import ChatPage from './pages/ChatPage';
import Profile from './pages/Profile';
import SettingPage from './pages/SettingPage';
import Userpage from './pages/Userpage';


function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className='h-screen overflow-hidden '>
  <Routes>
    <Route path='/' element={<ChatPage/>}/>
    <Route path='/setting' element={<SettingPage/>}/>
    <Route path='/user' element={<Userpage/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
   </div>
  )
}

export default App
