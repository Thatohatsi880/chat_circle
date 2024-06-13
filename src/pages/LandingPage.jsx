import React, { useState } from 'react'; // Importing useState hook
import { Link } from 'react-router-dom';
import { Footer } from './components';
import logo from '../assets/icons/chatCircleLogo.svg';
import searchIcon from '../assets/icons/search-normal.svg';
import microphoneIcon from '../assets/icons/microphone-2.svg';
import quoteIcon from '../assets/icons/quote-up.svg';
import arrowIcon from '../assets/icons/arrow-up.svg';
import heroImage from '../assets/images/hero_img1.png';
import heroGroup from '../assets/images/hero_group1.png';
import popularImage from '../assets/images/popular_img.png';
import engagingImage from '../assets/images/engagingchats.png';

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
    <div className='container m-auto flex flex-col gap-10 px-4 md:p-0'>
      <nav className="justify-between m-0 mt-4">
        <div className="container mx-auto flex justify-between items-center flex-col md:flex-row gap-6">
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
            <div className="flex flex-col sm:flex-row gap-6 w-4/5 sm:w-3/10 lg:w-1/3 justify-between mx-auto lg:mx-0">
  <Link to="/SignUp" className="text-white hover:text-white border bg-primaryOrange border-primaryOrange px-4 py-2 rounded rounded-xl w-full lg:w-48 md:w-36 text-center font-bold mb-4 sm:mb-0">SIGN UP</Link>
  <Link to="/Login" className="text-primaryOrange hover:text-white border border-primaryOrange px-4 py-2 rounded rounded-xl w-full lg:w-48 md:w-36 text-center font-bold">SIGN IN</Link>
</div>

        </div>
      </nav>
      <div className="flex pt-10 hero-background justify-between items-center border border-grey-200 border-l-0 border-r-0">
  <div className="flex flex-col w-full md:w-2/5 gap-5">
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-textGrey font-normal leading-tight">
      Post <span className='text-primaryOrange font-bold'>questions</span>, Get <span className='text-primaryOrange font-bold'>answers</span>, and Engage in <span className='text-primaryOrange font-bold'>discussions</span> on various topics
    </h2>
    <div className="flex mt-4 gap-1">
      <button className={`button-action button-base ${startDiscussion ? 'bg-primaryOrange text-white' : 'bg-white text-gray-700'}`} onClick={handleStartDiscussion}>START A DISCUSSION</button>
      <button className={`button-base text-primaryOrange gap-3 ${browseTopics ? 'bg-primaryOrange text-white' : 'bg-white text-gray-700'}`} onClick={handleBrowseTopics}>BROWSE TOPICS<img src={arrowIcon} alt="Arrow Icon" /></button>
    </div>
  </div>
  <div className="w-3/5 relative hidden md:flex justify-center">
        <img src={heroImage} alt=""  className='z-10 ml-5 '/>
        <img src={heroGroup} alt="" className='z-50 absolute top-14 max-h-min bg-contain hidden lg:flex'/>
        </div>
</div>

{/* popular */}

      <div className="mt-12 flex flex-col md:flex-row gap-4 max-h-max border border-grey-200 border-l-0 border-r-0">
          <div className="w-full md:w-2/4">
          <img src={popularImage} alt="Screenshots of popular threads"/>
          </div>
          <div className="w-full md:w-2/4 flex flex-col justify-center gap-8">
          <h2 className="text-3xl md:text-2xl font-bold text-primaryOrange"><span className='underlines'>Popular O</span>N ChatCircle</h2>
          <p className='text-3xl md:text-5xl font-normal leading-tight text-textGrey'>Find answers, share knowledge, and connect with passionate people</p>
          </div>
      </div>

      {/* engaging chats */}

      <div className="mt-12 flex flex-col-reverse md:flex-row items-center border border-grey-200 border-l-0 border-r-0">
  <div className="w-full md:w-2/4 flex flex-col gap-8">
    <h2 className="text-2xl md:text-4xl font-bold w-3/4 text-primaryOrange">Most Engaging threads on <span className='underlines'>ChatCircle</span></h2>
    <p className='text-2xl md:text-5xl font-normal leading-tight text-textGrey tracking-wider'>Have a closer look at trending topics and discussions in our forum</p>
  </div>
  <div className="w-full md:w-2/4 md:pl-8">
    <img src={engagingImage} alt="Screenshots of engaging chats" className="w-full md:w-auto max-w-full h-auto md:h-auto" />
  </div>
</div>



      {/* testimonials */}
   
      <div className="mt-12">
  <h1 className="text-4xl font-bold text-textGrey">Testimonials</h1>
  <div className="flex flex-col md:flex-row justify-between mt-8 gap-8 md:gap-4">
    <div className="testimonials p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
      <div><img src={quoteIcon} alt="Quotation icon" /></div>
      <p className="text-sm md:text-base">I never thought I'd find a community like this online! Joining the forum has been a game-changer. I've learned so much from other hobbyists in the 'DIY & Crafts' section, and everyone's so supportive. Now I feel confident tackling new projects and sharing my own creations. Thanks for this amazing space!</p>
      <hr className="border-gray-300" />
      <div>
        <h5 className='font-bold text-sm md:text-base'>Sarah M.</h5>
        <p className="text-xs md:text-sm">Home Decor Enthusiast</p>
      </div>
    </div>
    <div className="testimonials p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
      <div><img src={quoteIcon} alt="Quotation icon" /></div>
      <p className="text-sm md:text-base">This forum has been my go-to resource for years. As a programmer, I constantly find insightful discussions and solutions in the 'Programming' category. It's a fantastic platform to learn from others, share my knowledge, and stay updated on the latest trends. I highly recommend it to anyone in the tech field!</p>
      <hr className="border-gray-300" />
      <div>
        <h5 className='font-bold text-sm md:text-base'>David L</h5>
        <p className="text-xs md:text-sm">Senior Software Developer</p>
      </div>
    </div>
    <div className="testimonials p-4 w-full md:w-1/3 md:max-w-xs h-auto flex flex-col gap-4 border border-gray-200 rounded-lg min-w-[400px]">
      <div><img src={quoteIcon} alt="Quotation icon" /></div>
      <p className="text-sm md:text-base">I'm so grateful for this forum! As a college student, the 'Education & Careers' section has been invaluable for navigating my academic path. I've gotten fantastic advice on choosing a major, preparing for exams, and even landing internships. The discussions with other students and professionals have been incredibly helpful</p>
      <hr className="border-gray-300" />
      <div>
        <h5 className='font-bold text-sm md:text-base'>Emily C</h5>
        <p className="text-xs md:text-sm">Aspiring Marketing Professional</p>
      </div>
    </div>
  </div>
</div>


      
      <Footer/>
    </div>
  );
};

export default LandingPage;
