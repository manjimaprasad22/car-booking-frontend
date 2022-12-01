import React, { useContext, useEffect } from 'react'
import { NewContext } from './Route'

const Home = () => {
  const [hide, sethide] = useContext(NewContext)
    useEffect(() => {
      sethide(false)
    }, [])
  return (
    <div>
        <h1 className='lab'>The Cars We Drive Say Lot About Us </h1>
        <img src='https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'
        className='imag'
        />   </div>
  )
}

export default Home