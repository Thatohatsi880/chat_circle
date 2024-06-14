import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiSearch, FiMic, FiChevronDown, FiPlus, FiBookmark, FiFileText, FiLogOut, FiFolder, FiFilter, FiCalendar } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Categories, Navbar } from './components';

const Groups = () => {
//   const [userMenuVisible, setUserMenuVisible] = useState(false);
  const navigate = useNavigate();

//   const toggleUserMenu = () => {
//     setUserMenuVisible(!userMenuVisible);
//   };

  const createGroup = () => {
    navigate('/create-group');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      

      <div className="flex flex-1">
      <Sidebar />

        {/* Groups Section */}
        <div className="flex-1 mt-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Groups</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Pending Invitation: 0</span>
              <button
                onClick={createGroup}
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
              >
                <FiPlus className="mr-2" /> Create Group
              </button>
            </div>
          </div>

          <hr className="mb-4" />

          <h2 className="text-xl font-bold mb-4">Popular Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {/* Placeholder for popular groups */}
            <div className="bg-gray-200 h-32 rounded"></div>
            <div className="bg-gray-200 h-32 rounded"></div>
            <div className="bg-gray-200 h-32 rounded"></div>
          </div>

          <h2 className="text-xl font-bold mb-4">Discover Groups</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-700" />
              <span className="text-gray-700">Filter</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-gray-700" />
                <span className="text-gray-700">Date Created</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Category</span>
                <FiChevronDown className="text-gray-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {/* Placeholder for discover groups */}
            <div className="bg-gray-200 h-32 rounded"></div>
            <div className="bg-gray-200 h-32 rounded"></div>
            <div className="bg-gray-200 h-32 rounded"></div>
          </div>

          <div className="flex justify-center">
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded flex items-center">
              <span className="mr-2">View More</span>
              <FiChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
