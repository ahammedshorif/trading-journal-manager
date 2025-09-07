import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-orange-500 flex flex-row gap-4 place-content-evenly py-3 w-full rounded-2xl mb-3 mt-3 text-lg font-serif'>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/history">
            Trading History
        </NavLink>
    </div>
  )
}

export default Navbar