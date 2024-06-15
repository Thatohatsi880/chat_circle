import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiChevronDown, FiPlus, FiSearch, FiMic } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 
import { Navbar, Sidebar } from './components';

const Drafts = () => {
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
      <Navbar /> {/* Navbar component */}

      <div className="flex flex-1">
      <Sidebar /> {/* Sidebar component */}

        {/* Drafts Section */}
        <div className="flex-1 mt-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Drafts</h2>
            <div className="flex space-x-4">
              <Link to={'/CreatePosts'} className="text-primaryOrange hover:bg-primaryOrange hover:text-white border border-primaryOrange py-2 px-4 rounded rounded-xl text-center font-bold">New Question</Link>
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

export default Drafts;
