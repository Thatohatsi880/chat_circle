import React, { useState } from "react";
import { FiPlus, FiFilter, FiCalendar, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Sidebar, Navbar } from "./components";

const Groups = () => {
  const [visibleGroups, setVisibleGroups] = useState(6); // Initial number of visible groups
  const navigate = useNavigate();

  const createGroup = () => {
    navigate("/CreateGroup");
  };

  const handleViewMore = () => {
    setVisibleGroups(visibleGroups + 3); // Increment the number of visible groups by 3
  };

  const renderGroups = (count) => {
    const groups = [];
    for (let i = 0; i < count; i++) {
      groups.push(<div key={i} className="bg-gray-200 h-32 rounded"></div>);
    }
    return groups;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        {/* Groups Section */}
        <div className="flex-1 mt-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-textGrey">Groups</h2>
            <div className="flex items-center space-x-4 text-primaryOrange">
              <p><span className="text-gray-700">Pending Invitation: </span>  0</p>
              <button
                onClick={createGroup}
                className=" py-2 px-4 rounded flex items-center text-primaryOrange hover:bg-primaryOrange hover:text-white border border-primaryOrange rounded-xl text-center font-bold"
              >
                Create Group
              </button>
            </div>
          </div>

          <hr className="mb-4" />

          <h2 className="text-xl font-bold mb-4 text-textGrey">Popular Groups</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {/* Render initial placeholders for popular groups */}
            {renderGroups(3)}
          </div>

          <h2 className="text-xl font-bold mb-4">Discover Groups</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-700" />
              <span className="text-gray-700">Filter</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FiCalendar className="text-gray-700" />
                <span className="text-gray-700">Date Created</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Category</span>
                <FiChevronDown className="text-gray-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {/* Render discover groups placeholders */}
            {renderGroups(visibleGroups)}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleViewMore}
              className="text-primaryOrange py-2 px-4 rounded flex items-center"
            >
              <span className="mr-2">View More</span>
              <FiChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
