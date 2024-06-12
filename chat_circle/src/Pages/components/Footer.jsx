import { Link } from 'react-router-dom';

const Footer = () => {

    return (
    <div className="mt-12">
      <div className="flex justify-between">
      <div className="w-1/3 mr-8">
      <h1 className="text-lg font-bold mb-4">Most Engaging threads on ChatCircle</h1>
            <h2 className="text-lg font-bold mb-4">Have a closer look at trending</h2>
            <h2 className="text-lg font-bold mb-4">topics and dicussions in our</h2>
            <h2 className="text-lg font-bold mb-4">forum</h2>
          </div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square
          </div>
      </div>
      <br/>
      <br/>
      <div className="mt-12">
        <h1 className="text-lg font-bold ml-8">Testimonials</h1>
        <div className="flex justify-around mt-8">
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 1</div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 2</div>
          <div className="bg-gray-200 p-4 w-1/4 h-32">Square 3</div>
        </div>
      </div>
      <hr className="my-8 border-gray-300"/>
      <footer className="bg-gray-800 p-4 text-white">
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
              <Link to="/" className="text-white text-xl font-bold">MyForum</Link>
              <div className="mt-2">Dummy message</div> {/* Dummy message */}
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
    </div>
    )
    
}

export default Footer