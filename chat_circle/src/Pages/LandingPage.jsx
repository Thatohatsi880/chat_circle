import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">MyForum</Link>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyForum</h1>
        <p className="text-lg text-gray-700 mb-8">Join the conversation and share your thoughts!</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</Link>
          <Link to="/signup" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
