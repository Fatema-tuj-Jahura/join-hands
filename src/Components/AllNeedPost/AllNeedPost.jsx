import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

const AllNeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/volunteer?search=${search}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [search]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6 bg-[#F1f0e2]">
      <h1 className="text-3xl font-bold text-[#6A7F72] mb-6">All Volunteer Need Posts</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Post Title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-400 rounded-md w-full max-w-md"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllNeedPost;
