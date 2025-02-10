import { FaLinkedin, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#6A7F72] text-white">
      {/* Upper Section */}
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-extrabold text-[#EC9C85]">
              <MdVolunteerActivism />
            </span>
            <span className="text-2xl font-bold text-[#FDFBCF]">Join Hands</span>
          </div>
        </div>
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
            <li>Churn Detection</li>
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
      <div className="border-t border-[#EBECCc] my-4"></div>

      {/* Lower Section */}
      <div className="bg-[#95AA9B] text-white py-6 text-center flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm flex items-center">
          &copy; 2025 <span className="mx-1"><MdVolunteerActivism /></span> Join Hands - All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaLinkedin size={20} />
          <FaTwitter size={20} />
          <FaFacebookF size={20} />
          <FaGithub size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
