import React from 'react'
import { Link } from 'react-router-dom'

const MangaPage = () => {

  return (
    <div className='mangapage' >
    <Link to={`/manga/15`}>
      <img src="https://s2.bunnycdn.ru/assets/_bnx/mangafire_7xx.gif" alt="hh" />
      </Link>
    </div>
  )
}

export default MangaPage
