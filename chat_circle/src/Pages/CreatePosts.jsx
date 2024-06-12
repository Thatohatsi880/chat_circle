import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiChevronDown, FiPlus, FiSearch, FiMic } from 'react-icons/fi';

const IntegratedComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [userMenuVisible, setUserMenuVisible] = useState(false);

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

  const toggleCategories = () => {
    setShowCategories(!showCategories);
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
            <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleCategories}>
              <span className="text-gray-700">Categories</span>
              <FiChevronDown />
            </div>
            {showCategories && (
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

        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <button className="text-blue-500">&larr; Back</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Save Draft</button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Make a Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Post Title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                value={content}
                onChange={handleContentChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Post Content"
                rows="10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Photo (optional)</label>
              <div className="border-2 border-dashed rounded p-4 text-center">
              </div>
              <div className="border-2 border-dashed rounded p-4 text-center">Drag and drop or click to upload</div>
            </div>
            <div className="mb-4 flex items-center">
            <label className="block text-gray-700 mb-2 mr-2">Share as Anonymous</label>
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-500 text-sm">Your Post will be displayed as anonymous and others won't be able to see your name/profile as well as messaging you.</span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Question Tags (up to 10)</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Add up to 10 key words people can use to discover your questions. Separate each with a comma."
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Captcha</label>
              <input type="text" className="border rounded w-full py-2 px-3" placeholder="Type the word above" />
              <button className="mt-2 bg-gray-200 text-gray-700 py-2 px-4 rounded">Verify</button>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Publish</button>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <div>
            <h3 className="text-gray-700 font-bold">Science & Technology</h3>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
              <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
            </ul>
            <h3 className="text-gray-700 font-bold">Arts & Entertainment</h3>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
              <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
            </ul>
            <h3 className="text-gray-700 font-bold">Business & Finance</h3>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
              <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
            </ul>
            <h3 className="text-gray-700 font-bold">Lifestyle & Wellness</h3>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
              <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
            </ul>
            <h3 className="text-gray-700 font-bold">Hobbies & Interests</h3>
            <ul className="mb-4">
              <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
              <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntegratedComponent;
