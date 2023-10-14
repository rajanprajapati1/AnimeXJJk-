import React from 'react'
import {ContextApi} from './Utils/ContextApi'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import WatchPage from './Pages/WatchPage';
import MangaPageP from './Pages/MangaPage';


const App = () => {
  return (
    <ContextApi>
    <div className='App'>
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path="/watch/:id" element={<WatchPage/>} />
    <Route path='/manga/:id' element={<MangaPageP/>}/>
    </Routes>
    </Router>
    </div>
    </ContextApi>
  )
}

export default App
