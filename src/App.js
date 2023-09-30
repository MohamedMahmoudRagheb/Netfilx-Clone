import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'
import Sigin from './Sigin'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Movie' element={<Movie/>}></Route>
          <Route path='/Sigin' element={<Sigin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
