import { useState } from 'react'
import Header from "./components/Header"
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'


function App() {
  const [logIn, setLogIn] = useState(false)
  return (
    <main>
      <Header />
      <Navbar />
      <Home />
    </main>
  )
}

export default App
