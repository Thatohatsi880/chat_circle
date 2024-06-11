import React, { useState } from 'react'; // Importing useState hook
import { Link } from 'react-router-dom';
import { FaMicrophone, FaSearch, FaEnvelope } from 'react-icons/fa'; // Importing the microphone, search, and envelope icons from react-icons

const LandingPage = () => {
  const [mode, setMode] = useState('signup'); // State to track current mode: 'signin' or 'signup'
  const [startDiscussion, setStartDiscussion] = useState(false); // State to track Start a discussion toggle
  const [browseTopics, setBrowseTopics] = useState(false); // State to track Browse topics toggle

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'signup' ? 'signin' : 'signup');
  };

  const handleStartDiscussion = () => {
    setStartDiscussion(!startDiscussion);
  };

  const handleBrowseTopics = () => {
    setBrowseTopics(!browseTopics);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">MyForum</Link>
          <div className="flex-grow flex justify-center">
            <div className="relative w-full max-w-lg">
              <button className="absolute left-2 top-2 text-white">
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search for a topic..."
                className="py-2 pl-10 pr-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-full"
              />
              <button className="absolute right-2 top-2 text-white">
                <FaMicrophone />
              </button>
            </div>
          </div>
          <div className="space-x-4 flex">
            <Link to="/SignUp" className="text-gray-300 hover:text-white border border-gray-300 px-4 py-2 rounded">Sign Up</Link>
            <Link to="/Login" className="text-gray-300 hover:text-white border border-gray-300 px-4 py-2 rounded">Sign In</Link>
          </div>
        </div>
      </nav>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col items-start ml-8">
          <h2 className="text-lg font-bold">Post questions, Get 
            <div>answers, and Engage in</div>
            <div>discussions on various topics</div>
          </h2>
          <div className="flex mt-4">
            <button className={`mr-2 border px-4 py-2 rounded ${startDiscussion ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`} onClick={handleStartDiscussion}>Start a discussion</button>
            <button className={`border px-4 py-2 rounded ${browseTopics ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`} onClick={handleBrowseTopics}>Browse topics</button>
          </div>
        </div>
        <div className="w-1/3 mr-8">
          <h2 className="text-lg font-bold mb-4">Jumble of Conversations</h2>
          {/* Placeholder for jumble of conversations */}
          {/* Here, you can render conversations with people's profile pictures */}
        </div>
      </div>
      <br/>
      <br/>
      <div className="mt-12">
        <div className="flex justify-between">
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square</div>
          <div className="w-1/3 mr-8">
            <h1 className="text-lg font-bold mb-4">People ON ChatCircle</h1>
            <h2 className="text-lg font-bold mb-4">Find answers, share knowledge,</h2>
            <h2 className="text-lg font-bold mb-4">and connect connect with passionate</h2>
            <h2 className="text-lg font-bold mb-4">People </h2>
            {/* Placeholder for jumble of conversations */}
            {/* Here, you can render conversations with people's profile pictures */}
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className="mt-12">
      <div className="flex justify-between">
      <div className="w-1/3 mr-8">
      <h1 className="text-lg font-bold mb-4">Most Engaging threads on ChatCircle</h1>
            <h2 className="text-lg font-bold mb-4">Have a closer look at trending</h2>
            <h2 className="text-lg font-bold mb-4">topics and dicussions in our</h2>
            <h2 className="text-lg font-bold mb-4">forum</h2>
          </div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square
          </div>
      </div>
      <br/>
      <br/>
      <div className="mt-12">
        <h1 className="text-lg font-bold ml-8">Testimonials</h1>
        <div className="flex justify-around mt-8">
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 1</div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 2</div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 3</div>
        </div>
      </div>
      <hr className="my-8 border-gray-300"/>
      <footer className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <div className="flex items-center mb-4"> {/* Subscription section */}
            <FaEnvelope className="mr-5" />
            <span>Subscribe to receive email updates</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="py-1 pl-3 pr-1 ml-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-1/2" // Adjusted width
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Subscribe to mail</button>
          </div>
          <div className="flex justify-between mb-4"> {/* MyForum logo and dummy message */}
            <div>
              <Link to="/" className="text-white text-xl font-bold">MyForum</Link>
              <div className="mt-2">Dummy message</div> {/* Dummy message */}
            </div>
            <div className="flex justify-center"> {/* Quick Links */}
              <ul>
                <h4 className="font-bold">Quick Links</h4>
                <li><Link to="/ask">Ask a Question</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/drafts">Drafts</Link></li>
                <li><Link to="/help">Help</Link></li>
              </ul>
            </div>
            <div> {/* Contacts */}
              <div className="font-bold">Contacts</div>
              <div>www.chatcircle.com</div>
              <div>Email: name@example.com</div>
              <div>Location: locations</div>
              <div>Tel: +237 60000000</div>
              <div>Extra, extra, extra</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;
