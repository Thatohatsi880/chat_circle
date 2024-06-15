import { Link } from "react-router-dom";
import logo from "../../assets/icons/chatCircleLogo.svg";
import envelopeIcon from "../../assets/icons/mail.svg";

const Footer = () => {
  return (
    <footer className="bg-lightOrange p-4 text-textGrey">
      <div className="container mx-auto">
        <div className="relative flex flex-col sm:flex-row items-center mb-4 bg-white p-4 rounded-md justify-between max-w-4xl gap-3">
          <div className="flex items-center w-full sm:w-auto mb-4 md:mb-0">
            <div className="w-12 h-12 bg-lightOrange rounded flex justify-center items-center mr-3">
              <img src={envelopeIcon} alt="Envelope Icon" />
            </div>
            <div className="flex-grow md:flex-grow-0 md:w-3/10 text-center md:text-left">
              <p className="font-bold text-base">
                Sign-up to receive email updates
              </p>
            </div>
          </div>
          <div className="relative flex-grow flex items-center justify-center w-full md:w-80 lg:w-96">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 pl-3 pr-28 rounded placeholder-gray-400 focus:outline-none w-full h-12 border border-grey-200 bg-bgLightGrey font-normal text-xs"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 bg-primaryOrange text-white rounded text-xs h-full sm:text-base">
              Subscribe to mail
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="">
              <img src={logo} alt="Chat Circle Logo" />
            </Link>
            <div className="mt-2 w-full md:w-72">
              Find answers, share knowledge, and connect with passionate people.
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/CreatePosts">Ask a Question</Link>
              </li>
              <li>
                <Link to="/HomePage">Categories</Link>
              </li>
              <li>
                <Link to="/Drafts">Drafts</Link>
              </li>
              <li>
                <Link to="/ComingSoon">Help</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contacts</h4>
            <div>www.chatcircle.com</div>
            <div>Email: name@example.com</div>
            <div>Location: locations</div>
            <div>Tel: +237 60000000</div>
            <div>Extra, extra, extra</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
