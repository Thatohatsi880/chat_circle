import React, { useState } from 'react';
import { FiMessageCircle, FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/chatCircleLogo.svg';
import searchIcon from '../../assets/icons/search-normal.svg';
import microphoneIcon from '../../assets/icons/microphone-2.svg';
import messageIcon from '../../assets/icons/message.svg';
import notificationIcon from '../../assets/icons/notification.svg';
import profilePic from '../../assets/images/profile pic.png';


const Navbar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

  return (
    <div className="flex w-full gap-4 justify-between items-center bg-white p-4 shadow-md border border-black">
        {/* Logo and Search Section */}
        <div className="flex items-center justify-between ml-14 md:ml-0 flex-grow gap-4 border border-red-700 max-w-4xl ">
              <Link to="/" className="text-white text-xl font-bold hidden md:flex"><img src={logo} alt="chat circle logo" /></Link>
              <div className="relative w-full max-w-lg">
            <div className="flex items-center">  
              <div className="absolute left-2 top-2 text-white">
                <img src={searchIcon} alt="search Icon" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 rounded rounded-xl text-textGrey placeholder-gray-400 focus:outline-none w-full border border-lightGrey"
              />
              <button className="absolute right-2 top-2 text-white">
                <img src={microphoneIcon} alt="search Icon" />
              </button>
              </div>
          </div>
        </div>
        {/* Ask a Question Button */}
        <button className="text-white hover:text-white border bg-primaryOrange border-primaryOrange p-2 min-w-min rounded rounded-xl text-center hidden md:flex ">ASK A QUESTION</button>

        {/* Icons Section */}
        <div className="flex gap-4 w-32 justify-between items-center border border-red-600">
        <img src={messageIcon} alt="Message Icon" />
        <img src={notificationIcon} alt="Notification Icon" />
          <div className="relative">
          <img src={profilePic} alt="Message Icon" className='cursor-pointer ' onClick={toggleProfileOptions}/>
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
