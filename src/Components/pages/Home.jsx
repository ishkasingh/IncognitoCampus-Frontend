import React from 'react'
import VerticalNavbar from './VerticalNavbar'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    console.log(localStorage.getItem('userInfo'))
  return (

 <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white font-sans flex flex-col items-center justify-center p-4 space-y-8">
    
    <h1 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
      Welcome to <span className="text-purple-300">INCOGNITO Campus</span>
    </h1>
    <p className="text-sm text-gray-200 max-w-2xl text-center mb-8 leading-relaxed">
      A real-time anonymous chat space for students across colleges to share
      placement tips, branch insights, and internship hacks.
      <br /> Join public rooms for IITs, NITs, private colleges & more — and
      speak anonymously!
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Link
        to={"/mycollage"}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-xs font-semibold"
      >
        Enter the Chat Rooms
      </Link>
      <a
        href="#learn-more"
        className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg text-xs font-semibold"
      >
        Learn More
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-3xl mt-8">
      <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
        <h2 className="text-lg font-semibold mb-2 text-purple-700">
          Your Privacy is Our Priority
        </h2>
        <ul className="text-xs space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="text-base mr-2">🔒</span>
            <span>End-to-end encryption for all messages</span>
          </li>
          <li className="flex items-start">
            <span className="text-base mr-2">🕵️</span>
            <span>No personal information required to join</span>
          </li>
          <li className="flex items-start">
            <span className="text-base mr-2">🗑️</span>
            <span>Messages auto-delete after 24 hours</span>
          </li>
        </ul>
      </div>

      <div className="bg-white text-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
        <h2 className="text-lg font-semibold mb-3 text-purple-700">
          Want to Add Your College?
        </h2>
        <p className="mb-3 text-xs text-gray-600">Send us your request!</p>
        <ul className="text-xs space-y-2">
          <li className="flex items-center">
            <span className="text-base mr-2">📧</span>
            <strong className="mr-1">Email:</strong>
            <a
              href="mailto:addcollege@incognitocampus.com"
              className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
            >
              addcollege@incognitocampus.com
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-base mr-2">📱</span>
            <strong className="mr-1">Contact:</strong> +91-9876543210
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-purple-800 text-white p-6 rounded-lg shadow-md  w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Why Choose INCOGNITO Campus?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="text-center">
          <span className="text-2xl mb-1 block">🎭</span>
          <h3 className="text-sm font-semibold mb-1">True Anonymity</h3>
          <p className="text-xs">Speak freely without fear of judgment</p>
        </div>
        <div className="text-center">
          <span className="text-2xl mb-1 block">🌐</span>
          <h3 className="text-sm font-semibold mb-1">Diverse Network</h3>
          <p className="text-xs">Connect with students from various colleges</p>
        </div>
        <div className="text-center">
          <span className="text-2xl mb-1 block">💡</span>
          <h3 className="text-sm font-semibold mb-1">Valuable Insights</h3>
          <p className="text-xs">Gain insider knowledge on placements and internships</p>
        </div>
      </div>
    </div>

    <footer className="mt-8 text-xs text-gray-400 hover:text-gray-300 transition duration-300">
      &copy; 2025 INCOGNITO Campus. Built for students, by students.
    </footer>
  </div>
  
  )

}

export default Home