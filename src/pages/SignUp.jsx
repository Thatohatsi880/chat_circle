import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/chatCircleLogo.svg";
import googleIcon from "../assets/icons/flat-color-icons_google.svg";
import signupImage from "../assets/images/signup_img.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    const newErrors = { email: "", username: "", password: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validateUsername(formData.username)) {
      newErrors.username = "Username must be at least 8 characters long.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one number and one special character.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const response = await fetch(
          "https://chat-circle-zib6.onrender.com/auth/register.....signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Sign up failed");
        }

        const data = await response.json();
        console.log("User signed up:", data);
      } catch (err) {
        console.error(err);
        alert("Sign up failed");
      }
    }
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

      {/* Right side - Sign Up Form */}
      <div className="w-full md:w-[55%] flex justify-center items-center p-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Link to="/" className="text-white text-xl font-bold">
              <img src={logo} alt="chat circle logo" />
            </Link>
          </div>
          <p className="text-center text-gray-600 mb-4">
            By clicking "Sign up", you agree to our{" "}
            <span className="font-bold">terms of service</span> and acknowledge
            you have read our <span className="font-bold">privacy policy</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl h-12 focus:outline-none placeholder:text-sm text-textGrey"
                required
                placeholder="Enter email here"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl h-12 focus:outline-none placeholder:text-sm text-textGrey"
                required
                placeholder="Enter username here"
              />
              {errors.username && (
                <p className="text-red-500 mt-5">{errors.username}</p>
              )}
            </div>
            <div className="mb-8 relative">
              <label className="block text-gray-700" htmlFor="password">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl h-12 focus:outline-none placeholder:text-sm text-textGrey"
                required
                placeholder="Enter password here"
              />
              <button
                type="button"
                onClick={handleTogglePasswordVisibility}
                className="absolute inset-y-0 right-0 mr-2 text-gray-600 flex items-center w-12 justify-center"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
              {errors.password && (
                <small className="text-red-500 m-0 p-0">
                  {errors.password}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-primaryOrange text-white py-2 rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              SIGN UP
            </button>
          </form>
          <div className="flex items-center mt-4">
            <hr className="flex-grow border-gray-300" />
            <div className="mx-4 text-gray-500">OR</div>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full h-12 flex items-center justify-center rounded-xl gap-2 px-4 py-2 border-2 border-primaryOrange bg-white text-primaryOrange mt-4">
            <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/Login" className="text-textGrey font-bold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
