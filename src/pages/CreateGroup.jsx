import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Sidebar, Navbar } from './components';

const CreateGroup = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showCategories, setShowCategories] = useState({});

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

  const toggleCategories = (category) => {
    setShowCategories((prevShowCategories) => ({
      ...prevShowCategories,
      [category]: !prevShowCategories[category],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar component */}
      
      <div className="flex flex-1">
        <Sidebar /> {/* Sidebar component */}
        
        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <button className="text-blue-500">&larr; Back</button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Save To Draft</button>
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
                Drag and drop or click to upload
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <label className="block text-gray-700 mb-2 mr-2">Share as Anonymous</label>
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-500 text-sm">Your post will be displayed as anonymous and others won't be able to see your name/profile or message you.</span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Question Tags (up to 10)</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                placeholder="Add up to 10 keywords people can use to discover your questions. Separate each with a comma."
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Captcha</label>
              <input type="text" className="border rounded w-full py-2 px-3" placeholder="Type the word above" />
              <button className="mt-2 bg-gray-200 text-gray-700 py-2 px-4 rounded">Verify</button>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Create</button>
            </div>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 bg-white p-4 shadow-md hidden lg:block">
          <h2 className="text-lg font-bold mb-4">Popular Categories</h2>
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
    </div>
  );
};

export default CreateGroup;
