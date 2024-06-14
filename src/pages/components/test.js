import React, { useState } from 'react';
import { FiChevronDown, FiPlus, FiX, FiMenu, FiMessageCircle, FiBell, FiUser } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.svg';
import searchIcon from '../../assets/icons/search-normal.svg';
import microphoneIcon from '../../assets/icons/microphone-2.svg';
import logo from '../../assets/icons/chatCircleLogo.svg';

const Testing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCategories = () => setShowCategories(!showCategories);

  return (
    <div className="relative">
      {/* Hamburger Menu */}
      <button className="fixed top-4 left-4 md:hidden p-2 z-20 text-primaryOrange border rounded-xl border-primaryOrange" onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 bg-white p-4 shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-3/4 lg:w-64 md:mt-0 md:shadow-none border border-black max-h-screen rounded-r-2xl`}
      >
        <div className="mb-6">
          {/* Search Bar for small screens */}
          <div className="md:hidden mb-4">
            <div className="relative w-full max-w-lg">
              <div className="absolute left-2 top-2 text-gray-700">
                <img src={searchIcon} alt="search Icon" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-10 pr-4 rounded-xl text-textGrey placeholder-gray-400 focus:outline-none w-full border border-lightGrey"
              />
              <button className="absolute right-2 top-2 text-gray-700">
                <img src={microphoneIcon} alt="microphone Icon" />
              </button>
            </div>
            <button className="text-white hover:text-white border bg-primaryOrange border-primaryOrange px-2 py-1.5 rounded-xl w-full mt-2">ASK A QUESTION</button>
          </div>
          <ul>
            <li className="mb-2 flex items-center gap-4 px-6 py-4 bg-primaryOrange text-white">
              <i>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#fff" />
                  <path d="M17.6 22.5601H6.39996C4.57996 22.5601 2.91996 21.1601 2.61996 19.3701L1.28996 11.4001C1.06996 10.1601 1.67996 8.57007 2.66996 7.78007L9.59996 2.23007C10.94 1.15007 13.05 1.16007 14.4 2.24007L21.33 7.78007C22.31 8.57007 22.91 10.1601 22.71 11.4001L21.38 19.3601C21.08 21.1301 19.38 22.5601 17.6 22.5601ZM11.99 2.93007C11.46 2.93007 10.93 3.09007 10.54 3.40007L3.60996 8.96007C3.04996 9.41007 2.64996 10.4501 2.76996 11.1601L4.09996 19.1201C4.27996 20.1701 5.32996 21.0601 6.39996 21.0601H17.6C18.67 21.0601 19.72 20.1701 19.9 19.1101L21.23 11.1501C21.34 10.4501 20.94 9.39007 20.39 8.95007L13.46 3.41007C13.06 3.09007 12.52 2.93007 11.99 2.93007Z" fill="#fff" />
                </svg>
              </i>
              <NavLink to="/LandingPage" className="text-white" activeClassName="bg-primaryOrange">
                Home
              </NavLink>
            </li>
            {/* Add more links similarly */}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleCategories}>
            <span className="text-gray-700">Categories</span>
            <FiChevronDown />
          </div>
          {showCategories && (
            <ul className="ml-4">
              <li className="mb-2">
                <NavLink to="/Category1" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                  Category 1
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/Category2" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                  Category 2
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/Category3" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                  Category 3
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Groups</h2>
          <ul>
            <li className="mb-2 flex justify-between items-center">
              <NavLink to="/Groups" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                Groups
              </NavLink>
              <FiPlus className="text-gray-700" />
            </li>
            <li className="mb-2">
              <NavLink to="/CreateGroup" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                Create Group
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <NavLink to="/Messages" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                Messages
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/Bookmarks" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                Bookmarks
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/Drafts" className="text-gray-700" activeClassName="bg-primaryOrange text-white">
                Drafts
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/" className="text-gray-700 flex items-center">
            Log Out <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testing;
