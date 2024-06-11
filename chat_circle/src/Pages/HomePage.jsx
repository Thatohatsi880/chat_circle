// import { useState } from 'react';
// import { FiBell, FiMessageCircle, FiUser, FiChevronDown, FiPlus } from 'react-icons/fi';

// const HomePage = () => {
//   const [showProfileOptions, setShowProfileOptions] = useState(false);
//   const [showCategories, setShowCategories] = useState(false);

//   const toggleProfileOptions = () => {
//     setShowProfileOptions(!showProfileOptions);
//   };

//   const toggleCategories = () => {
//     setShowCategories(!showCategories);
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-white p-4 shadow-md">
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Navigation</h2>
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Home</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Popular</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Recent</a>
//             </li>
//           </ul>
//         </div>
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Categories</h2>
//           <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleCategories}>
//             <span className="text-gray-700">Categories</span>
//             <FiChevronDown />
//           </div>
//           {showCategories && (
//             <ul className="ml-4">
//               <li className="mb-2">
//                 <a href="#" className="text-gray-700">Category 1</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="text-gray-700">Category 2</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="text-gray-700">Category 3</a>
//               </li>
//             </ul>
//           )}
//         </div>
//         <div className="mb-6">
//           <h2 className="text-lg font-bold mb-4">Groups</h2>
//           <ul>
//             <li className="mb-2 flex justify-between items-center">
//               <a href="#" className="text-gray-700">Groups</a>
//               <FiPlus className="text-gray-700" />
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Create Group</a>
//             </li>
//           </ul>
//         </div>
//         <div className="mb-6">
//           <ul>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Messages</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Bookmarks</a>
//             </li>
//             <li className="mb-2">
//               <a href="#" className="text-gray-700">Drafts</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <a href="#" className="text-gray-700 flex items-center">
//             Log Out <span className="ml-2">→</span>
//           </a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {/* Title Bar */}
//         <div className="flex justify-between items-center mb-6 bg-white p-4 shadow-md">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold">myForum</h1>
//             <div className="ml-6 relative">
//               <input type="text" className="border rounded p-2" placeholder="Search..." />
//               <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded">Ask a Question</button>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <FiMessageCircle className="text-gray-700 mx-4" />
//             <FiBell className="text-gray-700 mx-4" />
//             <div className="relative">
//               <FiUser
//                 className="text-gray-700 mx-4 cursor-pointer"
//                 onClick={toggleProfileOptions}
//               />
//               {showProfileOptions && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
//                   <a href="#" className="block px-4 py-2 text-gray-700">View Profile</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700">Settings</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700">Log Out</a>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4">Welcome to the HomePage</h2>
//           <p>This is where the main content will go.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
