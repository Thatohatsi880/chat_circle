import React, { useState } from "react";
import {
  FiChevronDown,
  FiPlus,
  FiX,
  FiMenu,
  FiMessageCircle,
  FiBell,
  FiUser,
} from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import groupIcon from "../../assets/icons/people.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCategories = () => setShowCategories(!showCategories);
  // const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

  return (
    <div className="relative">
      {/* Hamburger Menu */}
      <button
        className="fixed top-4 left-4 md:hidden p-2 z-20 text-primaryOrange border rounded rounded-xl border-primaryOrange "
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 bg-white p-4 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0 md:w-64 md:mt-0 md:shadow-none border border-grey-200  border-l-0 min-h-screen rounded-r-2xl`}
      >
        <div className="mb-6 border border-grey-200 border-t-0 border-l-0 border-r-0">
          <ul>
            <li className="">
              <NavLink
                to="#"
                className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
                activeClassName="bg-primaryOrange text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="home_icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="#3A3D4A"
                  />
                  <path
                    d="M17.6 22.5601H6.39996C4.57996 22.5601 2.91996 21.1601 2.61996 19.3701L1.28996 11.4001C1.06996 10.1601 1.67996 8.57007 2.66996 7.78007L9.59996 2.23007C10.94 1.15007 13.05 1.16007 14.4 2.24007L21.33 7.78007C22.31 8.57007 22.91 10.1601 22.71 11.4001L21.38 19.3601C21.08 21.1301 19.38 22.5601 17.6 22.5601ZM11.99 2.93007C11.46 2.93007 10.93 3.09007 10.54 3.40007L3.60996 8.96007C3.04996 9.41007 2.64996 10.4501 2.76996 11.1601L4.09996 19.1201C4.27996 20.1701 5.32996 21.0601 6.39996 21.0601H17.6C18.67 21.0601 19.72 20.1701 19.9 19.1101L21.23 11.1501C21.34 10.4501 20.94 9.39007 20.39 8.95007L13.46 3.41007C13.06 3.09007 12.52 2.93007 11.99 2.93007Z"
                    fill="#292D32"
                  />
                </svg>
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-6 border border-grey-200 border-t-0 border-l-0 border-r-0">
          <div
            className="flex items-center justify-between text-textGrey gap-4 px-6 py-4 mb-2 cursor-pointer"
            onClick={toggleCategories}
          >
            <span className="text-gray-700">Categories</span>
            <FiChevronDown />
          </div>
          {showCategories && (
            <ul className="ml-4">
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="text-gray-700"
                  activeClassName="bg-primaryOrange text-white"
                >
                  Category 1
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="#"
                  className="text-gray-700"
                  activeClassName="bg-primaryOrange text-white"
                >
                  Category 2
                </NavLink>
              </li>
            </ul>
          )}
        </div>
        <div className="mb-6 border border-grey-200 border-t-0 border-l-0 border-r-0">
          <ul>
            <li className="mb-2">
              <NavLink
                to="#"
                className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
                activeClassName="bg-primaryOrange text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="home_icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9702 14.4399C18.3402 14.6699 19.8502 14.4299 20.9102 13.7199C22.3202 12.7799 22.3202 11.2399 20.9102 10.2999C19.8402 9.58992 18.3102 9.34991 16.9402 9.58991"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.99994 14.4399C5.62994 14.6699 4.11994 14.4299 3.05994 13.7199C1.64994 12.7799 1.64994 11.2399 3.05994 10.2999C4.12994 9.58992 5.65994 9.34991 7.02994 9.58991"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.08997 17.7799C7.67997 18.7199 7.67997 20.2599 9.08997 21.1999C10.69 22.2699 13.31 22.2699 14.91 21.1999C16.32 20.2599 16.32 18.7199 14.91 17.7799C13.32 16.7199 10.69 16.7199 9.08997 17.7799Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Groups</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="#"
                className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
                activeClassName="bg-primaryOrange text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="home_icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span> Create a Group</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mb-6 border border-grey-200 border-t-0 border-l-0 border-r-0">
          <ul>
 {/* Messages */}
            <li>
            <NavLink
              to="#"
              className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
              activeClassName="bg-primaryOrange text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="home_icons"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="#6A6E87"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9965 11H16.0054"
                  stroke="#6A6E87"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 11H12.0045"
                  stroke="#6A6E87"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99451 11H8.00349"
                  stroke="#6A6E87"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Messages</span>
            </NavLink>
            </li> 

          {/* Bookmarks */}
            <li className="mb-2">
            <NavLink
              to="#"
              className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
              activeClassName="bg-primaryOrange text-white"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="home_icons" xmlns="http://www.w3.org/2000/svg">
<path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              <span>Bookmarks</span>
            </NavLink
            </li>

          {/* Drafts */}
            <li className="mb-2">
            <NavLink
              to="/Drafts"
              className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
              activeClassName="bg-primaryOrange text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="home_icons" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              <span>Drafts</span>
            </NavLink>

{/* logout */}
        <div>
        <NavLink
              to="/"
              className="flex items-center text-textGrey gap-4 px-6 py-4 hover:bg-primaryOrange  hover:text-white home_icons"
              activeClassName="bg-primaryOrange text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="home_icons"  xmlns="http://www.w3.org/2000/svg">
<path d="M17.4399 14.62L19.9999 12.06L17.4399 9.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.76001 12.0601H19.93" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              <span>Log out</span>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
