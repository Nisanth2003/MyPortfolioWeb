import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar></Navbar>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Nisanth 👋</h1>
        <p className="text-lg">A Full-Stack Developer who builds web experiences using the MERN Stack.</p>

      </div>
    </div>
  )
}

export default Home
