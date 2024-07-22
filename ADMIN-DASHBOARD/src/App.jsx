import { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Home from './home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Home/>

    </div>
  
  )
}

export default App
