import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageRequestPost = () => {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/requestedVolunteer")
          .then((res) => res.json())
          .then((data) => {
            const userPosts = data.filter(
              (post) =>
                post.volunteerName === user.displayName &&
                post.volunteerEmail === user.email
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
          confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/requestedVolunteer/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire("Cancelled!", "Your request has been removed.", "success");
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
        <div className="container mx-auto p-6 bg-[#D4E7C5] rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#2F5D50] mb-6 text-center">
            My Volunteer Request Posts
          </h2>
      
          {loading ? (
            <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-lg text-[#4A7856]"></span>
          </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-700 text-lg">
              You have not added any volunteer need posts yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-[#A8C69F] text-[#0B3D2E]">
                  <tr>
                    <th className="p-3 border border-gray-300">Title</th>
                    <th className="p-3 border border-gray-300">Location</th>
                    <th className="p-3 border border-gray-300">Organizer Name</th>
                    <th className="p-3 border border-gray-300">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post._id} className="bg-white text-center">
                      <td className="p-3 border border-gray-300">{post.title}</td>
                      <td className="p-3 border border-gray-300">{post.location}</td>
                      <td className="p-3 border border-gray-300">
                        {post.organizerName}
                      </td>
      
                      {/* Delete Button */}
                      <td className="p-3 border border-gray-300">
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="bg-[#E27D60] text-white px-3 py-1 border-2 border-gray-400 rounded hover:bg-[#F4A896] transition-colors"
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

export default ManageRequestPost;