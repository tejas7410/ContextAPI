import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div>This is a project explaining the use of the Context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
