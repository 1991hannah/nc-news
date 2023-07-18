import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Articles from './components/Articles'
import IndividualArticle from './components/IndividualArticle'
import './App.css'


function App() {
  const [logIn, setLogIn] = useState(false)
  return (
    <main className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/articles' element={ <Articles /> } />
        <Route path='/articles/:article_id' element={ <IndividualArticle />} />
      </Routes>
    </main>
  )
}

export default App
