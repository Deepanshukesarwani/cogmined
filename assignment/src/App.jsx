import { useState } from 'react'

import MainSidebar from './components/sidebar/mainSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <MainSidebar/>
   </>
  )
}

export default App
