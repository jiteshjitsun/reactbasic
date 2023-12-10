import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myArr = {
    Name: "jitesh",
    age: 23
  }
  return (
    <>
      <h1 className='bg-blue-600 p-4 rounded-2xl'>Tailwind test</h1>
      <Card username='jitesh' yourArr={myArr} btnText="read more"/>
      <Card username='sunny' yourArr={myArr}/>
    </>
  )
}

export default App
