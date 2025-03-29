import React, { useState } from 'react';
import reddit from '../../../../assets/redditLogo.svg'

const navBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#0e1113] p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Sol tarafta yer alan logo */}
        <div className="text-white font-bold text-2xl">
          <img className='h-15' src={reddit} alt="Reddit Logo" />
        </div>

        {/* Search baloncuğu */}
        <div className="flex items-center">
          <div className="flex items-center bg-gray-700 rounded-full py-0.5 px-8 w-full md:w-96">
              <svg 
              className="h-6 w-6 text-gray-400 mr-3" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
              type="text" 
              placeholder="Search Reddit" 
              className="bg-transparent text-white focus:outline-none w-full text-lg"
              />
          </div>
        </div>

        {/* Liste öğeleri */}
        <div className='flex items-center'>
          <ul className="flex items-center space-x-4 text-white">
            <li className="cursor-pointer  py-3 px-3 bg-[#b7cad4] flex rounded-3xl">
              <svg rpl="" fill="currentColor" height="20" icon-name="qr-code-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8 16h-3.7v-1.2h3.7v-3.7H16v3.7c0 .7-.5 1.2-1.2 1.2ZM9 7.8V5.2C9 4.5 8.5 4 7.8 4H5.2C4.5 4 4 4.5 4 5.2v2.5C4 8.5 4.5 9 5.2 9h2.5C8.5 9 9 8.5 9 7.8Zm-1.2 0H5.3V5.3h2.5v2.5Zm8.2 0V5.2c0-.7-.5-1.2-1.2-1.2h-2.5c-.8 0-1.3.5-1.3 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2Zm-1.2 0h-2.5V5.3h2.5v2.5Zm-5.8 7v-2.5c0-.8-.5-1.3-1.2-1.3H5.2c-.7 0-1.2.5-1.2 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2Zm-1.2 0H5.3v-2.5h2.5v2.5Zm-.8 3H2.6c-.2 0-.4-.2-.4-.4V13H1v4.4c0 .9.7 1.6 1.6 1.6H7v-1.2Zm12-.4V13h-1.2v4.4c0 .2-.2.4-.4.4H13V19h4.4c.9 0 1.6-.7 1.6-1.6Zm0-14.8c0-.9-.7-1.6-1.6-1.6H13v1.2h4.4c.2 0 .4.2.4.4V7H19V2.6Zm-16.8 0c0-.2.2-.4.4-.4H7V1H2.6C1.7 1 1 1.7 1 2.6V7h1.2V2.6Z"></path>
              </svg>
              Get App
            </li>
            <li className="cursor-pointer py-3 px-3 bg-[#d93900] rounded-3xl">
              Log In
            </li>
            <li className="relative cursor-pointer" onClick={toggleDropdown}>
              <span className="font-bold">
                . . .
              </span>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-60 bg-[#181c1f] rounded shadow-lg text-left">
                  <li className="cursor-pointer px-4 py-2">Log In / Sign Up</li>
                  <li className="cursor-pointer px-4 py-2">Advertise on Reddit</li>
                  <li className="cursor-pointer px-4 py-2">Try Reddit Pro</li>
                  <li className="cursor-pointer px-4 py-2">Shop Collectible Avatars</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;