import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers, FaTag } from "react-icons/fa"; // Importing icons

const PostCard = ({ post }) => {
  const { coverImage, title, category, location, volunteersNeeded, _id } = post;
  console.log(post);
  
  return (
    <div className="card bg-[#ddead1] text-[#6A7F72] shadow-xl m-4 rounded-lg border border-[#95AA9B] border-l-8 border-[#607d51] w-full max-w-lg">
      {/* Image Section */}
      <figure className="relative w-full h-80"> {/* Increased height to 80 */}
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg" 
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-6">
        <h2 className="card-title text-[#6A7F72] font-bold text-xl">{title}</h2>

        {/* Category */}
        <p className="flex items-center text-sm text-[#5D7261] mt-2">
          <FaTag className="text-[#607d51] mr-2" /> Category: {category}
        </p>

        {/* Location */}
        <p className="flex items-center text-sm text-[#5D7261]">
          <FaMapMarkerAlt className="text-red-500 mr-2" /> Location: {location}
        </p>

        {/* Volunteers Needed */}
        <p className="flex items-center text-sm text-[#5D7261]">
          <FaUsers className="text-blue-500 mr-2" /> Volunteers Needed: {volunteersNeeded}
        </p>

        {/* View Details Button */}
        <div className="card-actions justify-end mt-4">
          <Link to={`/detailsPost`}>
            <button className="btn bg-[#95AA9B] hover:bg-[#7F9C85] text-white border-none rounded-md px-6 py-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
