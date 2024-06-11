import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-1/2 bg-gray-200">
        {/* Left side - Picture Placeholder */}
        <div className="h-full flex items-center justify-center">
          <span className="text-gray-700 text-xl">Picture Placeholder</span>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        {/* Right side - Sign In Form */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
              <img src="/path/to/your/myForum-logo.png" alt="myForum Logo" className="h-12" />
            </div>
            {/* Text below logo */}
            <p className="text-center text-gray-600 mb-2">
              By clicking "Sign up", you agree to our{' '}
              <span className="font-bold">terms of service</span> and acknowledge you have read our{' '}
              <span className="font-bold">privacy policy</span>
            </p>
            <br/>
            <br/>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="absolute inset-y-0 right-0 mt-2 mr-2 flex items-center text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-left text-gray-600">
                <a href="/reset-password" className="text-blue-500">Forgot password?</a>
              </p>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Sign In
            </button>
          </form>
          <br/>
            <br/>
            <div className="flex items-center mt-4">
              <hr className="flex-grow border-gray-300" />
              <div className="mx-4 text-gray-500">OR</div>
              <hr className="flex-grow border-gray-300" />
            </div>
            <br/>
            {/* Google Sign-in Button */}
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
              Sign in with Google
            </button>
            {/* Login Link */}
            <p className="text-center mt-2">Don't have an account? <a href="/SignUp" className="text-blue-500">Sign Up</a></p>
          </div>
        </div>
    </div>
  );
};

export default Login;
