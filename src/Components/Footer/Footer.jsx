import { FaLinkedin, FaTwitter, FaPeace, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6A7F72] text-white">
      {/* Upper Section */}
      <div className="container mx-auto py-10 px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg">SOLUTIONS</h2>
          <ul className="mt-4 space-y-2">
            <li>Explainable AI</li>
            <li>ML Monitoring</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg">USE CASES</h2>
          <ul className="mt-4 space-y-2">
            <li>Fraud</li>
            <li>Churn detection</li>
            <li>Underwriting</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg">RESOURCES</h2>
          <ul className="mt-4 space-y-2">
            <li>Resource Hub</li>
            <li>Blog</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg">COMPANY</h2>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#EBECCc]"></div>

      {/* Lower Section */}
      <div className="bg-[#95AA9B] text-white py-6 text-center flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; 2025 YourCompany - All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedin size={20} />
          <FaTwitter size={20} />
          <FaPeace size={20} />
          <FaGithub size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
