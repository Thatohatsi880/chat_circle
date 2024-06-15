import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Sidebar, Navbar } from './components';
import backIcon from '../assets/icons/arrow-left.svg';
import { Link } from "react-router-dom";

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
        
        <div className="flex-1 p-4 mt-8">
          <div className="flex justify-between items-center mb-4 border border-grey-200 border-t-0 border-l-0 border-r-0 pb-6">
            <div className='flex gap-5 justify-between items-center border'>
            <button className="text-textGrey"><img src={backIcon} alt="" /></button>
             <h1 className="text-2xl font-normal">Make a Group</h1>
             </div>
            
            <button className="text-primaryOrange hover:bg-primaryOrange hover:text-white border border-primaryOrange py-2 px-4 rounded rounded-xl text-center font-bold">Save To Draft</button>
          </div>
          
         <div className='border rounded rounded-2xl bg-gray-100 p-3 flex justify-between gap-8'>
         <form onSubmit={handleSubmit} className='w-auto'>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-bold">Title:</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="border rounded w-full py-2 px-3 placeholder:text-sm"
                placeholder="Enter title here e.g Starting a Garden"
              />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold">Description:</label>
              <textarea
                value={content}
                onChange={handleContentChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Enter you question here......"
                rows="10"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-bold">Photo (optional)</label>
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
              <button className="mt-2 bg-primaryOrange text-white hover:text-primaryOrange hover:bg-white border border-primaryOrange py-2 px-4 rounded rounded-xl text-center ">Verify</button>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-primaryOrange text-white hover:text-primaryOrange hover:bg-white border border-primaryOrange py-2 px-4 rounded rounded-xl text-center font-bold">Create</button>
            </div>
          </form>

          {/* Right Sidebar */}
        <div className="w-2/6 p-4 hidden lg:block">
          <div className=''>
          <h2 className="text-lg font-bold text-textGrey">Group Category</h2>
          <p className='text-textGrey text-sm'>How will you categorize your post</p>
          </div>
          <div className='bg-white border mt-5 shadow-md px-6 py-8 flex flex-col gap-10'>
            <h3 className="text-gray-700 font-bold cursor-pointer flex items-center justify-between" onClick={() => toggleCategories('scienceTechnology')}>
              Science & Technology <FiChevronDown />
            </h3>
            {showCategories.scienceTechnology && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer flex items-center justify-between" onClick={() => toggleCategories('artsEntertainment')}>
              Arts & Entertainment <FiChevronDown />
            </h3>
            {showCategories.artsEntertainment && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer flex items-center justify-between" onClick={() => toggleCategories('businessFinance')}>
              Business & Finance <FiChevronDown />
            </h3>
            {showCategories.businessFinance && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer flex items-center justify-between" onClick={() => toggleCategories('lifestyleWellness')}>
              Lifestyle & Wellness <FiChevronDown />
            </h3>
            {showCategories.lifestyleWellness && (
              <ul className="ml-4 mb-4">
                <li><a href="#" className="text-gray-700">Sub-category 1</a></li>
                <li><a href="#" className="text-gray-700">Sub-category 2</a></li>
              </ul>
            )}
            <h3 className="text-gray-700 font-bold cursor-pointer flex items-center justify-between" onClick={() => toggleCategories('hobbiesInterests')}>
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
      </div>
    </div>
  );
};

export default CreateGroup;
