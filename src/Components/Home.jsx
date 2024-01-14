import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        
        <div className="nav h-20 flex justify-center items-center text-3xl font-bold gap-10 bg-[#121212] text-white">
            <NavLink to={'/students'}> Students </NavLink>
            <NavLink to={'/teacher'}> Teacher </NavLink>
            <NavLink to={'/posts'}> Posts </NavLink>
        </div>
    </div>
  )
}

export default Home