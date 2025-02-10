import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdVolunteerActivism } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#EBECCc] px-4 py-4 shadow-md">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-1">
          <span className="text-4xl font-extrabold text-[#EC9C85]" ><MdVolunteerActivism /> </span>
         
          <span className="text-2xl font-bold text-[#95AA9B]">Join Hands</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-[#6A7F72] text-lg">
          <Link to="/" className="hover:text-[#EC9C85] underline decoration-[#EC9C85]">Home</Link>
          <Link to="/volunteer-posts" className="hover:text-[#EC9C85] underline decoration-[#EC9C85]">All Volunteer Need Posts</Link>
          

          {/* My Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-[#EC9C85] text-lg focus:outline-none flex items-center underline decoration-[#EC9C85]"
            >
              My Profile <span><MdOutlineArrowDropDown /></span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <Link to="/add-post" className="block px-4 py-2 text-[#58744B] text-lg hover:bg-[#EFD8C9]">
                  Add Volunteer Need Post
                </Link>
                <Link to="/manage-posts" className="block px-4 py-2 text-[#58744B] text-lg hover:bg-[#EFD8C9]">
                  Manage My Posts
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Login */}
        <Link to="/login" >
          <button className="hidden md:block bg-[#95AA9B] text-lg text-white px-4 py-2 rounded-md font-medium border-2 border-amber-50 hover:bg-[#EC9C85]">
          Login
          </button>
        
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-[#EC9C85] text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-white p-4 rounded-lg shadow-md">
          <Link to="/" className="block text-[#6A7F72] hover:text-[#EC9C85]">Home</Link>
          <Link to="/volunteer-posts" className="block text-[#6A7F72] hover:text-[#EC9C85]">All Volunteer Need Posts</Link>
          <Link to="/login" className="block text-[#6A7F72] hover:text-[#EC9C85]">Login</Link>

          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="block w-full text-left text-[#6A7F72] hover:text-[#EC9C85]"
          >My Profile<span><MdOutlineArrowDropDown /></span>
          </button>

          {isDropdownOpen && (
            <div className="pl-4">
              <Link to="/add-post" className="block text-[#58744B] hover:text-[#EC9C85]">Add Volunteer Need Post</Link>
              <Link to="/manage-posts" className="block text-[#58744B] hover:text-[#EC9C85]">Manage My Posts</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
