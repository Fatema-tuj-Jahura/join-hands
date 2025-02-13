import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from '../../assets/regi-bg.png';
import loginImage from '../../assets/login.png';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    
    // Perform login logic here
    console.log("Logging in with:", email, password);
    e.target.reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left - Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${loginImage})` }}>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-[#95AA9B]">Welcome Back!</h3>
            <p className="text-sm text-gray-600">Login to continue exploring new opportunities.</p>
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-[#561C24] text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
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
              Login
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center">
            <button className="flex items-center space-x-2 bg-[#F9F2EC] border py-2 px-4 rounded-lg text-gray-700 hover:bg-[#EFD8C9] transition">
              <FcGoogle className="text-xl" />
              <span>Login with Google</span>
            </button>
          </div>

          <p className="text-center text-gray-700 mt-4">
            Don't have an account? <Link to="/register" className="text-[#561C24] underline">Sign Up</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
