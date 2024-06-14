import React from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiLock, FiLogOut, FiClipboard } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const signOut = () => {
    navigate('/');
  };

  const goToCreatePosts = () => {
    navigate('/CreatePosts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-gray-700 flex items-center">
            <FiUser className="text-gray-700 h-5 w-5 mr-2" />
            Profile
          </Link>
        </div>
      </div>

      <div className="flex flex-1 p-8 flex-wrap">
        {/* Left Compartment */}
        <div className="w-full lg:w-1/3 bg-white p-4 shadow-md rounded mb-4 lg:mb-0 lg:mr-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-300 h-48 w-48 rounded mb-4"></div>
            <div className="text-gray-700 font-bold text-lg mb-4">Contact Information</div>
            <div className="text-gray-700 mb-2 flex items-center">
              <FiMail className="mr-2" /> Email: makaanfiona@gmail.com
            </div>
            <div className="text-gray-700 mb-2 flex items-center">
              <FiPhone className="mr-2" /> Phone: +237 678 723
            </div>
            <div className="text-gray-700 mb-4 flex items-center">
              <FiMapPin className="mr-2" /> Address: Sonac Str.
            </div>
            <div className="w-full border-t border-gray-200 mt-4 pt-4">
              <div className="flex items-center mb-4 cursor-pointer">
                <FiLock className="text-gray-700 mr-2" />
                <span className="text-gray-700">Change Password</span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={signOut}>
                <FiLogOut className="text-gray-700 mr-2" />
                <span className="text-gray-700">Sign Out</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Compartment */}
        <div className="flex-1 bg-white p-4 shadow-md rounded">
          <div className="text-2xl font-bold text-gray-700 mb-2">Makaan Fiona</div>
          <div className="text-gray-600 mb-4">Bio: Enthusiastic web developer with a passion for creating dynamic user experiences.</div>
          <div className="flex mb-6">
            <div className="bg-gray-200 p-4 rounded mr-4 flex-1 text-center">
              <div className="text-gray-700 font-bold text-xl">Posts</div>
              <div className="text-gray-500">12</div>
            </div>
            <div className="bg-gray-200 p-4 rounded flex-1 text-center">
              <div className="text-gray-700 font-bold text-xl">Comments</div>
              <div className="text-gray-500">34</div>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <Link to="/posts" className="text-xl font-bold text-gray-700 hover:underline">Posts</Link>
            <Link to="/comments" className="text-xl font-bold text-gray-700 hover:underline">Comments</Link>
          </div>
          <div className="flex justify-center mb-4">
            <FiClipboard className="text-gray-500 h-12 w-12" />
          </div>
          <div className="flex justify-center">
            <button 
              onClick={goToCreatePosts} 
              className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
            >
              Make a Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
