import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const VolunteerNeedsNow = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);

  useEffect(() => {
    fetch("https://join-hands-server.vercel.app/volunteer") 
      .then((res) => res.json())
      .then((data) => setVolunteerNeeds(data))
      .catch((error) => console.error("Error fetching volunteer needs:", error));
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#DFF6D8] flex flex-col items-center py-12">
      {/* Animated Heading */}
      <Fade direction="down">
        <h2 className="text-4xl font-bold text-[#2E4D38] mb-10 text-center drop-shadow-md">
          🌿 Volunteer Needs Now
        </h2>
      </Fade>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
        {volunteerNeeds.map((post) => (
          <Zoom key={post._id}>
            <div className="bg-gradient-to-r from-[#97a97c] to-[#b5c99a] shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl duration-300">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-4 text-[#2C5F2D]">
                {post.title}
              </h3>
              <p className="text-gray-900 text-sm mt-2">
                <span className="font-medium text-[#295E5B]">Category:</span> {post.category}
              </p>
              <p className="text-gray-900 text-sm">
                <span className="font-medium text-[#C0392B]">Deadline:</span> {post.deadline}
              </p>
              <div className="flex justify-center mt-4">
                <Link
                  to={`/detailsPost/${post._id}`}
                  className="bg-[#2C5F2D] hover:bg-[#1F3B28] text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;
