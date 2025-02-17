import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdVolunteerActivism, MdOutlineArrowDropDown } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import DefaultUser from "../../assets/default-user.png"; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <nav className="bg-[#EBECCc] px-4 py-6 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-1">
          <span className="text-4xl font-extrabold text-[#EC9C85]">
            <MdVolunteerActivism />
          </span>
          <span className="text-2xl font-bold text-[#95AA9B]">Join Hands</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-[#6A7F72] text-lg">
          <Link to="/" className="hover:text-[#EC9C85] underline decoration-[#EC9C85]">
            Home
          </Link>
          <Link to="/allPost" className="hover:text-[#EC9C85] underline decoration-[#EC9C85]">
            All Volunteer Need Posts
          </Link>

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
                <Link to="/addPost" className="block px-4 py-2 text-[#58744B] text-lg hover:bg-[#EFD8C9]">
                  Add Volunteer Need Post
                </Link>
                <Link to="/managePost" className="block px-4 py-2 text-[#58744B] text-lg hover:bg-[#EFD8C9]">
                  Manage My Posts
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Login & User Photo */}
        <div className="hidden md:flex items-center md:space-x-3 lg:space-x-8">
          {user && user?.email ? (
            <button onClick={handleLogOut} className="bg-[#95AA9B] text-lg text-white px-4 py-2 rounded-md font-medium border-2 border-amber-50 hover:bg-[#EC9C85]">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#95AA9B] text-lg text-white px-4 py-2 rounded-md font-medium border-2 border-amber-50 hover:bg-[#EC9C85]">
                Login
              </button>
            </Link>
          )}

          {/* User Photo */}
          <img
            className="w-10 h-10 border-2 border-[#95AA9B] rounded-full object-cover"
            src={user?.photoURL || DefaultUser}
            alt="User"
            id="my-tooltip-desktop"
          />
          <ReactTooltip
            anchorId="my-tooltip-desktop"
            place="left"
            content={user?.displayName}
            className="text-lg text-white font-bold"
            effect="solid"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* User Photo Outside Menu Button */}
          <img
            className="w-9 h-9 rounded-full object-cover"
            src={user?.photoURL || DefaultUser}
            alt="User"
            id="my-tooltip-mobile"
          />
          <ReactTooltip
            anchorId="my-tooltip-mobile"
            place="left"
            content={user?.displayName || "User"}
            className="text-lg text-white font-bold"
            effect="solid"
          />

          {/* Menu Button */}
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-[#EC9C85] text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-white p-4 rounded-lg shadow-md">
          {/* User Profile (Inside Menu) */}
          <div className="flex flex-col items-center space-y-2">
            <img className="w-16 h-16 rounded-full border-1 border-white" src={user?.photoURL || DefaultUser} alt="User" />
            <p className="text-lg font-semibold text-[#6A7F72]">{user?.displayName || "User"}</p>
          </div>

          <Link to="/" className="block text-[#6A7F72] hover:text-[#EC9C85]">Home</Link>
          <Link to="/allPost" className="block text-[#6A7F72] hover:text-[#EC9C85]">All Volunteer Need Posts</Link>

          {/* Login/Logout in Mobile Menu */}
          {user && user?.email ? (
            <button onClick={handleLogOut} className="block w-full bg-[#95AA9B] text-lg text-white px-4 py-2 rounded-md font-medium border-2 border-amber-50 hover:bg-[#EC9C85]">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="block w-full bg-[#95AA9B] text-lg text-white px-4 py-2 rounded-md font-medium border-2 border-amber-50 hover:bg-[#EC9C85]">
                Login
              </button>
            </Link>
          )}

          {/* My Profile Dropdown */}
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="block w-full text-left text-[#6A7F72] hover:text-[#EC9C85]"
          >
            My Profile <span><MdOutlineArrowDropDown /></span>
          </button>

          {isDropdownOpen && (
            <div className="pl-4">
              <Link to="/addPost" className="block text-[#58744B] hover:text-[#EC9C85]">Add Volunteer Need Post</Link>
              <Link to="/managePost" className="block text-[#58744B] hover:text-[#EC9C85]">Manage My Posts</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
