import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageNeedPost = () => {
  const { user } = useContext(AuthContext);
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://join-hands-server.vercel.app/volunteer")
      .then((res) => res.json())
      .then((data) => {
        const userPosts = data.filter(
          (post) =>
            post.organizerName === user.displayName &&
            post.organizerEmail === user.email
        );
        setPosts(userPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this post!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://join-hands-server.vercel.app/volunteer/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your post has been deleted.", "success");
              setPosts(posts.filter((post) => post._id !== id));
            }
          })
          .catch((error) =>
            Swal.fire("Error!", "Something went wrong!", "error")
          );
      }
    });
  };

  return (
    <div className="container mx-auto p-6 bg-[#b1c095] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#2E4d38] mb-6 text-center">
        My Volunteer Need Posts
      </h2>

      {loading ? (
         <div className="flex justify-center items-center py-10">
         <span className="loading loading-spinner loading-lg text-[#4A7856]"></span>
       </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You have not added any volunteer need posts yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-[#EFD8C9] text-[#06141B]">
              <tr>
                <th className="p-3 border border-gray-300">Title</th>
                <th className="p-3 border border-gray-300">Category</th>
                <th className="p-3 border border-gray-300">Location</th>
                <th className="p-3 border border-gray-300">Update</th>
                <th className="p-3 border border-gray-300">Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="bg-white text-center">
                  <td className="p-3 border border-gray-300">{post.title}</td>
                  <td className="p-3 border border-gray-300">{post.category}</td>
                  <td className="p-3 border border-gray-300">{post.location}</td>

                  {/* Update Button */}
                  <td className="p-3 border border-gray-300">
                    <Link to={`/updateNeedPost/${post._id}`}>
                    <button className="bg-[#a3B18a] border-2 border-gray-400 text-white px-3 py-1 rounded hover:bg-[#3a5a40]">
                      <FaEdit />
                    </button>
                    </Link>
                  </td>

                  {/* Delete Button */}
                  <td className="p-3 border border-gray-300">
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-[#c46d86] text-white px-3 py-1 border-2 border-gray-400 rounded hover:bg-[#Eab0bb]"
                    >
                      <FaTrash />
                    </button>
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

export default ManageNeedPost;
