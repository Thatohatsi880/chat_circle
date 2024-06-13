import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiChevronDown, FiPlus, FiSearch, FiMic } from 'react-icons/fi';
import { Link } from 'react-router-dom';  // Assuming you're using react-router for navigation

const IntegratedComponent = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', time: '10:00 AM', date: '2024-06-11' },
    { id: 2, text: 'I am good, thanks! What about you?', time: '10:05 AM', date: '2024-06-11' },
    { id: 3, text: 'This is another draft message.', time: '11:00 AM', date: '2024-06-11' },
    { id: 4, text: 'Draft message example.', time: '11:30 AM', date: '2024-06-12' },
  ]);
  const [selectedMessages, setSelectedMessages] = useState({});
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [showToFilter, setShowToFilter] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const toggleMessageSelection = (id) => {
    setSelectedMessages((prevSelectedMessages) => ({
      ...prevSelectedMessages,
      [id]: !prevSelectedMessages[id],
    }));
  };

  const deleteSelectedMessages = () => {
    setMessages(messages.filter(message => !selectedMessages[message.id]));
    setSelectedMessages({});
  };

  const toggleDateFilter = () => {
    setShowDateFilter(!showDateFilter);
  };

  const toggleToFilter = () => {
    setShowToFilter(!showToFilter);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center" style={{ width: '25%' }}>
          <img src="logo.png" alt="Logo" className="h-8 mr-2" />
        </div>
        <div className="flex items-center justify-center" style={{ width: '50%' }}>
          <div className="relative w-full flex justify-between items-center">
            <FiSearch className="text-gray-700 h-10 w-6 absolute left-0 ml-0" />
            <input
              type="text"
              placeholder="Search..."
              className="border rounded py-3 px-4 w-full pr-12"
            />
            <FiMic className="text-gray-700 h-6 w-6 absolute right-0 mr-3" />
          </div>
        </div>
        <div className="flex items-center space-x-4" style={{ width: '10%' }}>
          <FiMessageSquare className="text-gray-700 h-5 w-10 cursor-pointer" />
          <FiBell className="text-gray-700 h-5 w-10 cursor-pointer" />
          <div className="relative">
            <FiUser className="text-gray-700 h-5 w-10 cursor-pointer" onClick={toggleUserMenu} />
            {userMenuVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-1/6 bg-white p-4 shadow-md">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Home</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-700">Home</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="flex items-center justify-between mb-2 cursor-pointer">
              <span className="text-gray-700">Categories</span>
              <FiChevronDown />
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Groups</h2>
            <ul>
              <li className="mb-2 flex justify-between items-center">
                <Link to="/groups" className="text-gray-700">Groups</Link>
                <FiPlus className="text-gray-700" />
              </li>
              <li className="mb-2">
                <Link to="/create-group" className="text-gray-700">Create Group</Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <ul>
              <li className="mb-2">
                <Link to="/messages" className="text-gray-700">Messages</Link>
              </li>
              <li className="mb-2">
                <Link to="/bookmarks" className="text-gray-700">Bookmarks</Link>
              </li>
              <li className="mb-2">
                <Link to="/drafts" className="text-gray-700">Drafts</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/logout" className="text-gray-700 flex items-center">
              Log Out
            </Link>
          </div>
        </div>

        {/* Drafts Section */}
        <div className="flex-1 mt-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Drafts</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">New Question</button>
              <button
                onClick={deleteSelectedMessages}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Delete Selected
              </button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="border-b pb-2 mb-4">
            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={toggleDateFilter}
                  className="flex items-center space-x-1 text-gray-700"
                >
                  <span>Date</span>
                  <FiChevronDown />
                </button>
                {showDateFilter && (
                  <div className="absolute bg-white border rounded shadow-lg mt-1 w-40">
                    <ul>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Latest
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Oldest
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={toggleToFilter}
                  className="flex items-center space-x-1 text-gray-700"
                >
                  <span>To</span>
                  <FiChevronDown />
                </button>
                {showToFilter && (
                  <div className="absolute bg-white border rounded shadow-lg mt-1 w-40">
                    <ul>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 1
                      </li>
                      <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        Option 2
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded shadow-md">
            {messages.map((message) => (
              <div key={message.id} className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={!!selectedMessages[message.id]}
                  onChange={() => toggleMessageSelection(message.id)}
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-700">{message.text}</span>
                  <div className="flex space-x-2 text-gray-500 text-sm">
                    <span>{message.time}</span>
                    <span>{message.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedComponent;
