import React, { useState } from 'react';
import { FiMessageCircle, FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/chatCircleLogo.svg';
import searchIcon from '../../assets/icons/search-normal.svg';
import microphoneIcon from '../../assets/icons/microphone-2.svg';

const Navbar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

  return (
    <div className="hidden md:flex flex-col md:flex-row justify-between items-center bg-white p-4 shadow-md w-full border border-black">
      <div className="flex items-center flex justify-between flex-col md:flex-row gap-4 border border-yellow-700 w-full">
        <Link to="/" className="text-white text-xl font-bold"><img src={logo} alt="chat circle logo" /></Link>
            <div className="relative w-full max-w-lg">
              <div className="absolute left-2 top-2 text-white">
                <img src={searchIcon} alt="search Icon" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 rounded rounded-xl  text-textGrey placeholder-gray-400 focus:outline-none w-full border border-lightGrey"
              />
              <button className="absolute right-2 top-2 text-white">
              <img src={microphoneIcon} alt="search Icon" />
              </button>
            </div>
            <button className="text-white hover:text-white border bg-primaryOrange border-primaryOrange px-2 py-1.5 rounded rounded-xl text-center sm:mb-0 mr-10">ASK A QUESTION</button>
      </div>
      <div className="flex items-center">
        <FiMessageCircle className="text-gray-700 mx-4" />
        <FiBell className="text-gray-700 mx-4" />
        <div className="relative">
          <FiUser
            className="text-gray-700 mx-4 cursor-pointer"
            onClick={toggleProfileOptions}
          />
          {showProfileOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
              <a href="#" className="block px-4 py-2 text-gray-700">View Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700">Log Out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
