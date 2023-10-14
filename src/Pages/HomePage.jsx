import React from 'react'
import TopBanner from '../Components/TopBanner'
import Navbar from '../Components/Navbar'
import SliderC from '../Components/SliderC'
import ListPage from '../Components/ListPage'
import Banner from '../Components/Banner'
import MangaPage from '../Components/MangaPage'
import Category from '../Components/Category'
import Footer from '../Components/Footer'
import SearchPage from './SearchPage'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <TopBanner/>
      <Navbar/>
      <SliderC/>  
      <Banner/>
      <ListPage/>
      <MangaPage/>
      <Category/>
      <SearchPage/>
      <Footer/>
    </div>
  )
}

export default HomePage
