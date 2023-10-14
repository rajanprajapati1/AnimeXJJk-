import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Card = ({value}) => {


  return (
    <Link to={`/watch/${value?.id}`}>
      <div className="first" key={value?.id} style={{backgroundColor:'white'}}>
        <div className="overlay">
        <h3>{value?.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, facere.</p>
            <Link to={`/watch/${value?.id}`}>
            <button><AiFillPlayCircle/></button>
            </Link>
        </div>
        <img src={value?.image} alt={value?.title} className='img_card' />
            </div>
            </Link>

  )
}

export default Card
