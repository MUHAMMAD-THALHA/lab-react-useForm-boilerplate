import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormUse from './components/FormUse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormUse />
    </>
  )
}

export default App