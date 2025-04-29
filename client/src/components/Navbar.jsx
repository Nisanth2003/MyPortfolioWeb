import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
   <nav className="bg-gray-800 p-4 text-white">
    <ul className='flex space-x-4'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/">Contact</Link>
        </li>
    </ul>

   </nav>
  )
}

export default Navbar
