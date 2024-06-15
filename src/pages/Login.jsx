import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/icons/chatCircleLogo.svg";
import googleIcon from "../assets/icons/flat-color-icons_google.svg";
import signupImage from "../assets/images/signup_img.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left side - Picture Placeholder */}
      <div className="hidden lg:flex md:w-[45%] bg-bgOrange items-center justify-center">
        <div className="relative w-4/5 m-auto">
          <img src={signupImage} alt="" className="z-4 w-full h-auto" />

          <div className="z-50 absolute top-[50px] left-[-50px] w-[303px] h-[116px] p-4 bg-white rounded-[24px_0px_24px_24px] shadow-md flex flex-col justify-center">
            <h3 className="text-md font-bold text-primaryOrange">
              Find answers & share knowledge:
            </h3>
            <p className="text-sm">
              Join a community of passionate people discussing forum's focus
              topics
            </p>
          </div>

          <div className="z-60 absolute top-[280px] right-[-64px] w-[303px] h-[116px] p-4 bg-white rounded-[24px_0px_24px_24px] shadow-md flex flex-col justify-center items-start">
            <h3 className="text-md font-bold text-primaryOrange">
              Get your voice heard:
            </h3>
            <p className="text-sm">
              Share your ideas and connect with a supportive community
            </p>
          </div>

          <div className="z-80 absolute top-[462px] left-[-64px] w-[303px] h-[116px] p-4 bg-white rounded-[24px_0px_24px_24px] shadow-md flex flex-col justify-center">
            <h3 className="text-md font-bold text-primaryOrange">
              Level up your skills:
            </h3>
            <p className="text-sm">
              Learn from experts and collaborate with like-minded individuals
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[55%] flex justify-center items-center p-4">
        {/* Right side - Sign In Form */}
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Link to="/" className="text-white text-xl font-bold">
              <img src={logo} alt="chat circle logo" />
            </Link>
          </div>
          <h2 className="text-center text-gray-600 mb-2 font-bold">
            Welcome Back
          </h2>
          {/* Text below logo */}
          <p className="text-center text-gray-600">
            By clicking "Sign up", you agree to our{" "}
            <span className="font-bold">terms of service</span> and acknowledge
            you have read our <span className="font-bold">privacy policy</span>
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl h-12 text-xs focus:outline-none"
                placeholder="Enter email here"
              />
            </div>
            <div className="mb-1 relative">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-xl h-12 text-xs focus:outline-none"
                  required
                  placeholder="Enter password here"
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
                <Link to={'/ForgotPassword'} className="text-primaryOrange">Forgot password?</Link>
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
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-primaryOrange text-white py-2 rounded-xl hover:bg-white hover:text-primaryOrange hover:ring-primaryOrange"
            >
              <Link
                to="/HomePage"
                className="text-white font-bold"
              >
                SIGN IN
              </Link>
            </button>
          </form>
          <br />

          <div className="flex items-center mt-4">
            <hr className="flex-grow border-gray-300" />
            <div className="mx-4 text-gray-500">OR</div>
            <hr className="flex-grow border-gray-300" />
          </div>
          <br />
          {/* Google Sign-in Button */}
          <button className="w-full h-12 flex items-center justify-center rounded-xl gap-2 px-4 py-2 border-2 border-primaryOrange bg-white text-primaryOrange mt-4">
            <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
            <span>Google</span>
          </button>
          {/* Login Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-textGrey font-bold underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
