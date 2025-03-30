import React, { useState } from "react";
import VidNestLogo from '../assets/play-button.png';  
import SearchBox from "./SearchBox";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";


function Navbar() {

const [isDropdownOpen, setDropdownOpen] = useState(false);
const [isMenuOpen, setMenuOpen] = useState(false); // FIX: Added useState for Menu


return(
    
<nav className="bg-white border-gray-200 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Left: Logo & Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* ✅ FIX: Menu Icon Now Works */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-white absolute left-1" // ✅ Fixed visibility in dark mode
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="xl"
             />
          </button>

  <a href="" 
    onClick={() => {}}
    className="flex  items-center space-x-1  rtl:space-x-reverse">
      <img src={VidNestLogo} className="absolute left-12 h-8 space-x-3" alt="Logo" />
      
      <span className="absolute left-20 self-center text-xl text-ellipsis font-semibold whitespace-nowrap dark:text-white">VidNest</span>
  </a>
  </div>
  
  {/* User Profile Dropdown */}
  <div className="flex items-center md:order-2 pr-6">
        <div className="relative mr-3">
            <Button
                className="flex text-base rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-20 h-8 flex-col item-center dark:bg-blue-500 dark:text-gray-200">
                Upload 
            </Button>
            </div>
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 absolute right-8"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="User"
            />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
            className="absolute right-20 top-12 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 overflow-auto z-50"
            
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2">
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Profile</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Notifications</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Privacy</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign Out</a></li>
              
            </ul>
          </div>
          )}
        </div>
        <SearchBox></SearchBox>

        <div className="flex flex-col absolute right-24 rounded-full dark bg-gray-700 w-10 items-center">
        <button className="p-2 text-gray-400 hover:text-white">
          <FontAwesomeIcon 
            className=""
            icon={faBell} 
            size="lg" />
             <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
              3
            </span>
        </button>
      </div>
    </div>
      
    </nav>
  );
};

export default Navbar;