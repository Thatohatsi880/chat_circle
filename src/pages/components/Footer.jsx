import { Link } from 'react-router-dom';
import logo from '../../assets/icons/chatCircleLogo.svg';

const Footer = () => {

    return (
    <footer className="bg-lightOrange p-4 text-textGrey">
    <div className="container mx-auto">
      <div className="flex items-center mb-4"> {/* Subscription section */}
        {/* <FaEnvelope className="mr-5" /> */}
        <span>Subscribe to receive email updates</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-1 pl-3 pr-1 ml-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none w-1/2" // Adjusted width
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Subscribe to mail</button>
      </div>
      <div className="flex justify-between mb-4"> {/* MyForum logo and dummy message */}
        <div>
        <Link to="/" className=""><img src={logo} alt="chat circle logo" /></Link>
          <div className="mt-2 w-72">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </div>
        </div>
        <div className="flex justify-center"> {/* Quick Links */}
          <ul>
            <h4 className="font-bold">Quick Links</h4>
            <li><Link to="/ask">Ask a Question</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/drafts">Drafts</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
        <div> {/* Contacts */}
          <div className="font-bold">Contacts</div>
          <div>www.chatcircle.com</div>
          <div>Email: name@example.com</div>
          <div>Location: locations</div>
          <div>Tel: +237 60000000</div>
          <div>Extra, extra, extra</div>
        </div>
      </div>
    </div>
  </footer>

    
    )
    
}

export default Footer