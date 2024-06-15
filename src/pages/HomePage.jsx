import { Link } from "react-router-dom";
import { Navbar, Sidebar, Categories } from "./components";
import cardImage from "../assets/images/cardImg.png";
import clockIcon from "../assets/icons/clock.svg";

const HomePage = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <Navbar />

      <div className="flex p-0 gap-10">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col w-4/5">
          <h2 className="text-lg font-bold my-5">
            <span className="underlines">Welcome Back,</span> Username!
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-0 py-4 rounded-lg mb-6 ">
            {/* Post Cards */}
            <Link to={'/PostDetails'}>
            <div className="bg-cardBg_grey text-white py-8 px-4 rounded-2xl max-w-[420px] flex flex-col gap-4 text-sm">
              <h3 className="text-primaryOrange font-bold">
                Difference between UI and UX
              </h3>
              <p>
                I've been diving into the world of design and development, and I
                keep coming across the terms UI and UX. I understand that UI
                stands for User Interface, which is about the layout and visual
                elements of a product......
              </p>

              <div className="flex justify-between">
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Views
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Answers
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Votes
                </p>
              </div>

              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-4">
                  <img
                    src={cardImage}
                    alt="Image of the User"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Mary Jones Jones</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={clockIcon} alt="Clock Icon" className="w-4" />
                  <span>23 May, 2024</span>
                </div>
              </div>
            </div>
            </Link>

            <Link to={'/PostDetails'}>
            <div className="bg-cardBg_grey text-white py-8 px-4 rounded-2xl max-w-[420px] flex flex-col gap-4 text-sm">
              <h3 className="text-primaryOrange font-bold">
                Difference between UI and UX
              </h3>
              <p>
                I've been diving into the world of design and development, and I
                keep coming across the terms UI and UX. I understand that UI
                stands for User Interface, which is about the layout and visual
                elements of a product......
              </p>

              <div className="flex justify-between">
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Views
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Answers
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Votes
                </p>
              </div>

              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-4">
                  <img
                    src={cardImage}
                    alt="Image of the User"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Mary Jones Jones</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={clockIcon} alt="Clock Icon" className="w-4" />
                  <span>23 May, 2024</span>
                </div>
              </div>
            </div>
            </Link>
            

            <Link to={'/PostDetails'}>
            <div className="bg-cardBg_grey text-white py-8 px-4 rounded-2xl max-w-[420px] flex flex-col gap-4 text-sm">
              <h3 className="text-primaryOrange font-bold">
                Difference between UI and UX
              </h3>
              <p>
                I've been diving into the world of design and development, and I
                keep coming across the terms UI and UX. I understand that UI
                stands for User Interface, which is about the layout and visual
                elements of a product......
              </p>

              <div className="flex justify-between">
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Views
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Answers
                </p>
                <p className="font-bold">
                  <span className="text-primaryOrange">1.7K</span> Votes
                </p>
              </div>

              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-4">
                  <img
                    src={cardImage}
                    alt="Image of the User"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Mary Jones Jones</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={clockIcon} alt="Clock Icon" className="w-4" />
                  <span>23 May, 2024</span>
                </div>
              </div>
            </div>
            </Link>
            
            {/* Placeholder for chats */}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-auto mb-7 border-grey-200 border-t-0 border-l-0 border-r-0 w-full text-center">
            <div className=" w-full md:w-9/12 flex flex-col md:flex-row justify-between p-4">
              <div className="text-lg font-bold focus:outline-none min-w-36 ">
                <span className="underlines">Recent Discussions</span>
              </div>
              <div className="text-lg font-bold focus:outline-none  min-w-36">
                Engaging Threads
              </div>
              <div className="text-lg font-bold focus:outline-none min-w-36">
                Groups
              </div>
            </div>

            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
