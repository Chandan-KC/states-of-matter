import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatesOfMatter from './components/StatesOfMatter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <> 
    <StatesOfMatter />
   </>
  )
}

export default App
