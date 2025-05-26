import React, { useState, useEffect } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { BsIncognito } from "react-icons/bs";
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    console.log(userInfoString,"userInfoString");
    
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setUserName(userInfo.displayName);
    }
  }, []);

 

  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <BsIncognito className='text-xl' /> INCOGNITOCAMPUS
          </h1>
        </div>
      </div>

      <div className="w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here..."
            className="w-full rounded-full bg-gray-200 py-2 pl-4 pr-10 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = `/search?query=${encodeURIComponent(e.target.value)}`;
              }
            }}
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 111.397-1.398l3.85 3.85a1 1 0 01-1.415 1.415l-3.85-3.85zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaCircleUser className="w-10 h-10 rounded-full" />
          <div className="text-sm">
            <div className="font-medium text-gray-800">{userName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
