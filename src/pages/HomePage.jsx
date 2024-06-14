import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Categories, Navbar } from './components';

const HomePage = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto bg-gray-100">
      <Navbar />

      <div className='flex p-0 gap-10'>
       {/* Sidebar */}
       <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col border border-pink-800  w-4/5">
          <h2 className="text-lg font-bold mb-4">Welcome Back, Username!</h2>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Chats</h2>
            {/* Placeholder for chats */}
          </div>
          <div className="flex justify-around mb-7">
            <button className="text-lg font-bold focus:outline-none">Recent Discussions</button>
            <button className="text-lg font-bold focus:outline-none">Engaging Threads</button>
            <button className="text-lg font-bold focus:outline-none">Groups</button>
          </div>
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-5">Popular Categories</h2>
            
          </div> */}

            <Categories />
          </div>
      </div>
    </div>
  );
};

export default HomePage;
