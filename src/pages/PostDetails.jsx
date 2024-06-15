import React from 'react';
import { FiThumbsUp, FiThumbsDown, FiMessageSquare } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';


const PostDetails = () => {
  const navigate = useNavigate();

  const goToMessages = () => {
    navigate('/messages');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1">
        <div className="w-full lg:w-2/3 bg-white p-4 shadow-md rounded mb-4 lg:mr-4">
          {/* Post Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/48"
                  alt="User"
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-gray-700 font-bold">Makaan Fiona</div>
                  <div className="text-gray-500">Posted 2 hours ago</div>
                </div>
              </div>
              <div className="flex items-center">
                <button className="flex items-center text-gray-700 mr-4">
                  <FiThumbsUp className="mr-1" /> 1.2K
                </button>
                <button className="flex items-center text-gray-700 mr-4">
                  <FiThumbsDown className="mr-1" /> 34
                </button>
                <button
                  className="flex items-center text-blue-500"
                  onClick={goToMessages}
                >
                  <FiMessageSquare className="mr-1" /> Message
                </button>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/600x200"
              alt="Post"
              className="w-full h-auto rounded mb-4"
            />
            <div className="text-gray-700 mb-4">
              <p>
                This is a detailed post about mathematics and complex numbers.
                Let's dive into the world of numbers and explore their
                intricacies...
              </p>
            </div>
            <div className="flex flex-wrap items-center mb-4">
              <div className="border border-gray-300 rounded-full px-3 py-1 mr-2 mb-2">
                Mathematics
              </div>
              <div className="border border-gray-300 rounded-full px-3 py-1 mr-2 mb-2">
                Complex Numbers
              </div>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <div className="mr-4">1.7k Views</div>
              <div className="mr-4">1.7k Votes</div>
              <div className="mr-4">1.7k Answers</div>
              <div>96 Bookmarks</div>
            </div>
          </div>
          {/* Search and Comment Section */}
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full mr-2"
              />
              <input
                type="text"
                className="flex-1 border rounded p-2"
                placeholder="Search or add a comment..."
              />
              <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
                Add Comment
              </button>
            </div>
            {/* Answers Section */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700 mb-4">Answers</h2>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="flex items-center mb-2">
                  <img
                    src="https://via.placeholder.com/32"
                    alt="User"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div className="text-gray-700">User123</div>
                </div>
                <div className="text-gray-700">
                  This is an answer to the post about mathematics and complex
                  numbers...
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="flex items-center mb-2">
                  <img
                    src="https://via.placeholder.com/32"
                    alt="User"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div className="text-gray-700">User456</div>
                </div>
                <div className="text-gray-700">
                  Here is another insightful answer to the post...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          {/* Related Topics and Contributors Section */}
          <div className="bg-white p-4 shadow-md rounded mb-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Related Topics</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Algebra</li>
              <li>Calculus</li>
              <li>Geometry</li>
              <li>Trigonometry</li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Contributors</h2>
            <div className="flex flex-wrap">
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full mr-2 mb-2"
              />
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full mr-2 mb-2"
              />
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full mr-2 mb-2"
              />
              <img
                src="https://via.placeholder.com/32"
                alt="User"
                className="h-8 w-8 rounded-full mr-2 mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
