import { useState } from 'react'
import Header from "./components/Header"
import Home from './components/Home'
import './App.css'

function App() {
  const [logIn, setLogIn] = useState(false)
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App
