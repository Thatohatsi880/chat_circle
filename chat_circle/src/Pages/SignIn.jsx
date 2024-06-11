import { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateUsername = (username) => {
    return username.length >= 8;
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { email: '', username: '', password: '' };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validateUsername(formData.username)) {
      newErrors.username = 'Username must be at least 8 characters long.';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one number and one special character.';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === '')) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Sign up failed');
        }

        const data = await response.json();
        console.log('User signed up:', data);
      } catch (err) {
        console.error(err);
        alert('Sign up failed');
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex w-full">
        {/* Left side - Picture Placeholder */}
        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-700 text-xl">Picture Placeholder</span>
          </div>
        </div>

        {/* Right side - Sign Up Form */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            {/* myForum Logo */}
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
                <label className="block text-gray-700" htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded"
                  required
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <br/>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Sign Up
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
            <p className="text-center mt-2">Already have an account? <a href="/signin" className="text-blue-500">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
