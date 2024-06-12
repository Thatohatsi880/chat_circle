import React, { useState } from 'react'; // Importing useState hook
import { Link } from 'react-router-dom';
import { Footer } from './components';
import logo from '../assets/icons/chatCircleLogo.svg';
import searchIcon from '../assets/icons/search-normal.svg';
import microphoneIcon from '../assets/icons/microphone-2.svg';

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
    <div className='container m-auto'>
      <nav className="justify-between p-4">
        <div className="container mx-auto flex justify-between border border-black items-center ">
          <Link to="/" className="text-white text-xl font-bold"><img src={logo} alt="chat circle logo" /></Link>
            <div className="relative w-full max-w-lg">
              <div className="absolute left-2 top-2 text-white">
                <img src={searchIcon} alt="search Icon" />
              </div>
              <input
                type="text"
                placeholder="Search for a topic..."
                className="py-2 pl-10 pr-4 rounded rounded-xl  text-textGrey placeholder-gray-400 focus:outline-none w-full border border-lightGrey"
              />
              <button className="absolute right-2 top-2 text-white">
              <img src={microphoneIcon} alt="search Icon" />
              </button>
            </div>
          <div className="space-x-4 flex gap-4">
            <Link to="/SignUp" className="text-white hover:text-white border bg-primaryOrange border-primaryOrange px-4 py-2 rounded rounded-xl w-48 text-center font-bold">SIGN UP</Link>
            <Link to="/Login" className="text-primaryOrange hover:text-white border border-primaryOrange px-4 py-2 rounded rounded-xl w-48 text-center font-bold">SIGN IN</Link>
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
      
      <Footer/>
    </div>
  );
};

export default LandingPage;
