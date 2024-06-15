import React, { useState } from 'react';
import { FiBell, FiMessageSquare, FiUser, FiSearch, FiMic, FiChevronDown, FiPlus, FiBookmark, FiFileText, FiLogOut, FiFolder } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Sidebar } from './components';

const Bookmarks = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [bookmarks, setBookmarks] = useState([
    { id: 1, text: 'Saved post 1', time: '10:00 AM', date: '2024-06-11' },
    { id: 2, text: 'Saved post 2', time: '10:05 AM', date: '2024-06-11' },
    { id: 3, text: 'Saved post 3', time: '11:00 AM', date: '2024-06-11' },
    { id: 4, text: 'Saved post 4', time: '11:30 AM', date: '2024-06-12' },
  ]);
  const [selectedBookmarks, setSelectedBookmarks] = useState({});
  const navigate = useNavigate();

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  const toggleBookmarkSelection = (id) => {
    setSelectedBookmarks((prevSelectedBookmarks) => ({
      ...prevSelectedBookmarks,
      [id]: !prevSelectedBookmarks[id],
    }));
  };

  const deleteSelectedBookmarks = () => {
    setBookmarks(bookmarks.filter(bookmark => !selectedBookmarks[bookmark.id]));
    setSelectedBookmarks({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar component */}

      <div className="flex flex-1">
      <Sidebar /> {/* Sidebar component */}

        {/* Bookmarks Section */}
        <div className="flex-1 mt-8 p-4">
          <div className="flex justify-between items-center mb-4 border border-grey-200 border-t-0 border-l-0 border-r-0 pb-6">
            <h2 className="text-2xl font-bold">Saved Posts</h2>
            <button
              onClick={deleteSelectedBookmarks}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete Selected
            </button>
          </div>

          <div className="bg-white p-5 rounded shadow-md">
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id} className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={!!selectedBookmarks[bookmark.id]}
                  onChange={() => toggleBookmarkSelection(bookmark.id)}
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-gray-700">{bookmark.text}</span>
                  <div className="flex space-x-2 text-gray-500 text-sm">
                    <span>{bookmark.time}</span>
                    <span>{bookmark.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
