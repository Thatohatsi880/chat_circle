import React from 'react';
import { useState } from 'react';
import { FiChevronDown, FiPlus, FiX, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebarss = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false); // Reintroduced state
  
    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleCategories = () => setShowCategories(!showCategories);
  
    return (
      <div className="relative">
        {/* Hamburger Menu */}
        <button className="md:hidden p-4" onClick={toggleSidebar}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
  
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-white p-4 shadow-md transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:relative md:translate-x-0 md:w-full`}
        >
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
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
            {showCategories && ( // Conditionally render categories
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
    )
};

export default Sidebarss;