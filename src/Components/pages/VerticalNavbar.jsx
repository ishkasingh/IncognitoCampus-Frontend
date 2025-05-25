import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const VerticalNavbar = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const ProtectedLink = ({ to, children }) => {
    if (userInfo && userInfo.id) {
      return <Link to={to} className="flex items-center px-3 py-2 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition">{children}</Link>
    } else {
      return <Link to="/login" className="flex items-center px-3 py-2 rounded-lg hover:bg-purple-100 hover:text-purple-700 transition">{children}</Link>
    }
  }

  return (
    <div className='h-screen bg-gradient-to-b from-white to-purple-300 w-64 shadow-md'>
      <aside className="w-64 h-fit p-6 flex flex-col">
        <nav className="flex flex-col space-y-4 text-gray-800">
          <Link to={"/"} className="flex items-center px-3 py-2 gap-4 rounded-lg hover:bg-purple-200 hover:text-purple-800 transition">
            <FaHome className='text-xl text-purple-700' />
            <span className="font-medium">Home</span>
          </Link>

          <ProtectedLink to="/mycollage">
            <svg className="w-5 h-5 mr-3 text-purple-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/></svg>
            <span className="font-medium">My College</span>
          </ProtectedLink>

          <ProtectedLink to="/channels">
            <svg className="w-5 h-5 mr-3 text-purple-700" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3h12a1 1 0 011 1v2H3V4a1 1 0 011-1zm-1 5h14v2H3V8zm0 4h14v2H3v-2z"/></svg>
            <span className="font-medium">Channels</span>
          </ProtectedLink>

          <a className="flex items-center px-3 py-2 rounded-lg hover:bg-purple-200 hover:text-purple-800 transition">
            <svg className="w-5 h-5 mr-3 text-purple-700" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.964c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.377 2.455c-.785.57-1.84-.196-1.54-1.118l1.287-3.964-3.38-2.455c-.783-.57-.38-1.81.588-1.81h4.175l1.286-3.965z"/></svg>
            <span className="font-medium">AI Trending</span>
          </a>
        </nav>
      </aside>
    </div>
  )
}

export default VerticalNavbar