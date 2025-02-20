import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { FaTh, FaTable } from "react-icons/fa"; 
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
const AllNeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("card"); // Default layout is card

  useEffect(() => {
    fetch(`https://join-hands-server.vercel.app/volunteer?search=${search}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6 bg-[#F1f0e2]">
      <h1 className="text-3xl font-bold text-[#6A7F72] mb-6">
        All Volunteer Need Posts
      </h1>

      {/* Layout Switch Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setLayout("card")}
          className={`px-4 py-2 rounded-md ${
            layout === "card" ? "bg-[#6A7F72] text-white" : "bg-gray-300"
          } flex items-center`}
        >
          <FaTh className="mr-2" /> Card View
        </button>
        <button
          onClick={() => setLayout("table")}
          className={`px-4 py-2 rounded-md ${
            layout === "table" ? "bg-[#6A7F72] text-white" : "bg-gray-300"
          } flex items-center`}
        >
          <FaTable className="mr-2" /> Table View
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Post Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-400 rounded-md w-full max-w-md"
      />

      {/* Conditionally Render Card or Table Layout */}
      {layout === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto w-full max-w-7xl mx-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#4A7856] text-white text-lg">
            <tr>
              <th className="p-4 border">Thumbnail</th>
              <th className="p-4 border">Title</th>
              <th className="p-4 border">Category</th>
              <th className="p-4 border">Location</th>
              <th className="p-4 border">Volunteers Needed</th>
              <th className="p-4 border">View Details</th> {/* New Column */}
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="bg-white text-center hover:bg-gray-100 transition duration-300">
                {/* Image Column */}
                <td className="p-3 border">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-md mx-auto"
                  />
                </td>
                <td className="p-4 border font-semibold">{post.title}</td>
                <td className="p-4 border">{post.category}</td>
                <td className="p-4 border">{post.location}</td>
                <td className="p-4 border font-semibold text-[#EC9C85]">{post.volunteersNeeded}</td>
                
                {/* View Details Column */}
                <td className="p-4 border">
                  <Link to={`/detailsPost/${post._id}`} className="text-[#4A7856] hover:text-[#EC9C85] text-2xl">
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  

      )}
    </div>
  );
};

export default AllNeedPost;
