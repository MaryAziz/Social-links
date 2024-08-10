import { useState } from 'react'
import Links from '../Components/Links/Links'
import Profile from '../Components/Profile/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile></Profile>
    <Links></Links>
      
    </>
  )
}

export default App
