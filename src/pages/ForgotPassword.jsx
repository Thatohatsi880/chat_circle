import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/chatCircleLogo.svg';
import forgotPwdImg from '../assets/icons/fgtPwdIllustration.svg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement password reset functionality here
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="min-h-screen flex w-full">
        {/* Image */}
         <div className="hidden lg:flex md:w-[45%] bg-bgOrange items-center justify-center">
            <div className="w-4/5 m-auto">
              <img src={forgotPwdImg} alt="" className='z-4 w-full h-auto' />
            </div>
          </div>

{/* Form */}
      <div className='w-full md:w-[55%] flex justify-center items-center p-4'>
        <div className='p-6 rounded shadow-md w-full max-w-md flex flex-col gap-3'>
            <div className="flex justify-center mb-4">
                <Link to="/" className="text-white text-xl font-bold"><img src={logo} alt="chat circle logo" /></Link>
            </div>
                <h2 className='text-center text-gray-600 mb-4 font-bold'>Password Reset</h2>
                {/* Text below logo */}
                <p className="text-center text-gray-600 text-sm">
                Please enter the following details to reset your password. Password will be sent to your email.
                </p>
            <br />
          
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4 my-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder='Enter email here'
              className="mt-1 p-2 w-full rounded-xl h-12 text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryOrange focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-primaryOrange text-white font-bold mt-6 py-2 px-4 rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            RESET 
          </button>
        </form>

        <p className="text-center text-textGrey mt-4">Already have an account? <Link to="/Login" className="text-textGrey font-bold underline">Login</Link></p>
        </div>
      
      </div>
    </div>
  );
};

export default ForgotPassword;
