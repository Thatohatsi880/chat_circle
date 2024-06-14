import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logo from '../assets/icons/chatCircleLogo.svg';
import resetPwdImg from '../assets/icons/resetpwdamico.svg';

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (newPassword !== e.target.value) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be 8 or more characters and contain at least 1 number and 1 special character');
    } else {
      setPasswordError('');
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (passwordError === '' && confirmPasswordError === '' && newPassword && confirmPassword) {
      console.log('New password set:', newPassword);
      // Perform the actual password reset operation here
    } else {
      console.log('Please fix the errors before submitting');
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Image */}
      <div className="hidden lg:flex md:w-[45%] bg-bgOrange items-center justify-center">
        <div className="w-4/5 m-auto">
          <img src={resetPwdImg} alt="Reset Password" className='z-4 w-full h-auto' />
        </div>
      </div>

      {/* Form */}
      <div className='w-full md:w-[55%] flex justify-center items-center p-4'>
        <div className='p-6 rounded shadow-md w-full max-w-md flex flex-col gap-1'>
          <div className="flex justify-center mb-2">
            <Link to="/" className="text-white text-xl font-bold">
              <img src={logo} alt="Chat Circle Logo" />
            </Link>
          </div>
          <h2 className='text-center text-gray-600 mb-2 font-bold'>Password Reset</h2>
          <p className="text-center text-gray-600 text-sm">
            Please enter your new password below. Must be 8 or more characters and contain at least 1 number and 1 special character.
          </p>
          <br />
          <form onSubmit={handleResetPassword} className="flex flex-col mt-4">
            <div className='my-5'>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password:</label>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                  className="mt-1 p-2 w-full  rounded-xl h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent"
                  placeholder='Enter Password here'
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="absolute inset-y-0 right-0 mt-2 mr-2 flex items-center text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {passwordError && <small className="text-red-500">{passwordError}</small>}
            </div>
            <div className='mt-3'>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Repeat New Password:</label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  className="mt-1 p-2 w-full rounded-xl h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent"
                  placeholder='Enter Password here'
                />
                <button
                  type="button"
                  onClick={handleToggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 mt-2 mr-2 flex items-center text-gray-600"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {confirmPasswordError && <small className="text-red-500">{confirmPasswordError}</small>}
            </div>
            <button
              type="submit"
              className="bg-primaryOrange text-white font-bold py-2 px-4 rounded-xl h-12 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 mt-6"
            >
              CHANGE PASSWORD
            </button>
          </form>

          <p className="text-center text-textGrey mt-4">Already have an account? <Link to="/Login" className="text-textGrey font-bold underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
