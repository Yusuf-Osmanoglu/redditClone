import React, { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { WiDirectionUp } from "react-icons/wi";

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
      className={`fixed top-15 left-0 bg-[#0e1113] text-[#a6afb4] transition-all duration-300 border-r border-[#a6afb4] ${
        expanded ? 'w-64' : 'w-16'
      }`}
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      {/* Toggle butonu */}
      <div
        onClick={toggleSidebar}
        className="absolute -right-4 top-8 bg-[#0e1113] border-2 border-[#a6afb4] rounded-full p-1 cursor-pointer"
      >
        {expanded ? <IoIosArrowBack size={20} /> : <HiOutlineMenu size={20} />}
      </div>

      {expanded && (
        <ul className="mt-8">
          <li className="py-3 px-4 text-left hover:bg-[#48545b49] cursor-pointer flex items-center"><GoHome /> Home</li>
          <li className="py-3 px-4 text-left hover:bg-[#48545b49] cursor-pointer flex items-center"><WiDirectionUp />Populer</li>

          {/* TOPICS Dropdown */}
          <li
            className="py-3 px-4 hover:bg-[#48545b49] cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown('home')}
          >
            <span>TOPICS</span>
            {dropdownOpen['home'] ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
          </li>
          {dropdownOpen['home'] && (
            <ul className="ml-4">
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Internet Culture (Viral)</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Games</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Q&As</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Technology</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Pop Culture</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Movies & TV</li>
            </ul>
          )}

          {/* RESOURCES Dropdown */}
          <li
            className="py-3 px-4 hover:bg-[#48545b49] cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown('populer')}
          >
            <span>RESOURCES</span>
            {dropdownOpen['populer'] ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
          </li>
          {dropdownOpen['populer'] && (
            <ul className="ml-4">
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">About Reddit</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Advertise</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Reddit Pro</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Help</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Blog</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Careers</li>
              <li className="py-2 px-4 hover:bg-[#48545b49] cursor-pointer">Press</li>
            </ul>
          )}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
