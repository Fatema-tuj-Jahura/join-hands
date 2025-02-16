
import { Link , useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import backgroundImage from '../../assets/regi-bg.png';
import registerImage from '../../assets/register.jpg';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {setUser, createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
     
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    // password validation
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
    .then((result) => {
        const user = result.user
        setUser(user);
        console.log(user);
        updateUserProfile({ displayName: name, photoURL: photo })

        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: `Welcome ${name}!`,
        });
        e.target.reset();
      }
      
    )
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left - Form Section */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-[#95AA9B] text-center mb-6">Sign Up</h2>
          <p className="text-center text-gray-600 mb-4">Welcome to our community, let create your account.</p>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#E8D8C4] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#E8D8C4] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Photo URL</label>
              <input
                name="photo"
                type="text"
                placeholder="Enter Photo URL"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#E8D8C4] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#E8D8C4] focus:outline-none"
                required
              />
            </div>
            
            <button className="w-full bg-[#EC9C85] text-white py-2 rounded-lg hover:bg-[#E8D8C4] font-semibold transition">
              Register
            </button>
          </form>
          <p className="text-center text-gray-700 mt-4">
            Already have an account? <Link to="/login" className="text-[#EC9C85] underline">Log in</Link>
          </p>
        </div>
        
        {/* Right - Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${registerImage})` }}>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-[#95AA9B]">Find Your Inner Balance</h3>
            <p className="text-sm text-gray-600">Join our community and start making a difference today.</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
