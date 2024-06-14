import React, { useState } from 'react';
import { FiChevronDown, FiPlus, FiX, FiMenu, FiMessageCircle, FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/chatCircleLogo.svg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCategories = () => setShowCategories(!showCategories);
  const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

  return (
    <div className="relative">
      {/* Hamburger Menu */}
      <button className="fixed top-4 left-4 md:hidden p-4 z-20" onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white p-4 shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:mt-0 md:shadow-none border border-black max-h-screen rounded-r-2xl`}
      >
        <div className="md:hidden">
          {/* Navbar for small screens */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-bold"><img src={logo} alt="chat circle logo" /></Link>
              <div className="ml-6 relative">
                <input type="text" className="border rounded p-2" placeholder="Search..." />
                <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded">Ask a Question</button>
              </div>
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
        </div>

        <div className="mb-6">
          
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Popular
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Recent
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={toggleCategories}
          >
            <span className="text-gray-700">Categories</span>
            <FiChevronDown />
          </div>
          {showCategories && (
            <ul className="ml-4">
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Category 1
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Category 2
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Category 3
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Groups</h2>
          <ul>
            <li className="mb-2 flex justify-between items-center">
              <a href="#" className="text-gray-700">
                Groups
              </a>
              <FiPlus className="text-gray-700" />
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Create Group
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Messages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Bookmarks
              </a>
            </li>
            <li className="mb-2">
              <Link to="/Drafts" className="text-gray-700">
                Drafts
              </Link>
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

export default Sidebar;
