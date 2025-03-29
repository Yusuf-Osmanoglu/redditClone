import React, { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div
      className={`fixed top-20 left-0 bg-[#0e1113] text-[#a6afb4] transition-all duration-300 border-r border-[#a6afb4] ${
        expanded ? 'w-64' : 'w-16'
      }`}
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      {/* Toggle butonu */}
      <div
        onClick={toggleSidebar}
        className="absolute -right-4 top-8 bg-[#0e1113] border-2 border-[#a6afb4] rounded-full p-1 cursor-pointer"
      >
        <HiOutlineMenu size={20} />
      </div>

      {expanded && (
        <ul className="mt-8">
          {/* Home Sekmesi */}
          <li className="py-3 px-4 hover:bg-gray-700 cursor-pointer">Home</li>
          
          {/* Populer Sekmesi */}
          <li className="py-3 px-4 hover:bg-gray-700 cursor-pointer">Populer</li>

          {/* Home Dropdown */}
          <li className="py-3 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown('home')}>
            Home
          </li>
          {dropdownOpen['home'] && (
            <ul className="ml-4">
              <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Submenu 1</li>
              <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Submenu 2</li>
            </ul>
          )}

          {/* Populer Dropdown */}
          <li className="py-3 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown('populer')}>
            Populer
          </li>
          {dropdownOpen['populer'] && (
            <ul className="ml-4">
              <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Submenu A</li>
              <li className="py-2 px-4 hover:bg-gray-600 cursor-pointer">Submenu B</li>
            </ul>
          )}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
