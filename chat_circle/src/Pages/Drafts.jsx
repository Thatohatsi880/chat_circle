import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiChevronDown, FiPlus, FiSearch, FiMic } from 'react-icons/fi';

const IntegratedComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showCategories, setShowCategories] = useState({});
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', time: '10:00 AM', date: '2024-06-11' },
    { id: 2, text: 'I am good, thanks! What about you?', time: '10:05 AM', date: '2024-06-11' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', { title, content });
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleNewMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const toggleCategories = (category) => {
    setShowCategories((prevShowCategories) => ({
      ...prevShowCategories,
      [category]: !prevShowCategories[category],
    }));
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
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
                <a href="/" className="text-gray-700">Home</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => toggleCategories('mainCategories')}>
              <span className="text-gray-700">Categories</span>
              <FiChevronDown />
            </div>
            {showCategories.mainCategories && (
              <ul className="ml-4">
                <li className="mb-2">
                  <a href="#" className="text-gray-700">Category 1</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700">Category 2</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700">Category 3</a>
                </li>
              </ul>
            )}
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-4">Groups</h2>
            <ul>
              <li className="mb-2 flex justify-between items-center">
                <a href="#" className="text-gray-700">Groups</a>
                <FiPlus className="text-gray-700" />
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">Create Group</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-700">Messages</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">Bookmarks</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">Drafts</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" className="text-gray-700 flex items-center">
              Log Out
            </a>
          </div>
        </div>

          {/* Conversation Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Drafts</h2>
            <div className="bg-white p-5 rounded shadow-md" >
              {messages.map((message) => (
                <div key={message.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">{message.text}</span>
                    <div className="flex space-x-2 text-gray-500 text-sm">
                      <span>{message.time}</span>
                      <span>{message.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Message Form */}
            <form onSubmit={handleNewMessageSubmit} className="mt-4">
              <input
                type="text"
                value={newMessage}
                onChange={handleNewMessageChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Type a new message..."
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
          </div>
        </div>

        <div className="w-1/6 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div>
            <h3 className="text-gray-700 font-bold cursor-pointer" onClick={() => toggleCategories('scienceTechnology')}>
              Science & Technology <FiChevronDown />
            </h3>
            {showCategories.scienceTechnology && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer" onClick={() => toggleCategories('artsEntertainment')}>
              Arts & Entertainment <FiChevronDown />
            </h3>
            {showCategories.artsEntertainment && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer" onClick={() => toggleCategories('businessFinance')}>
              Business & Finance <FiChevronDown />
            </h3>
            {showCategories.businessFinance && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer" onClick={() => toggleCategories('lifestyleWellness')}>
              Lifestyle & Wellness <FiChevronDown />
            </h3>
            {showCategories.lifestyleWellness && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer" onClick={() => toggleCategories('hobbiesInterests')}>
              Hobbies & Interests <FiChevronDown />
            </h3>
            {showCategories.hobbiesInterests && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
  );
};

export default IntegratedComponent;
