import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaEnvelope, FaClipboardList, FaUsers } from "react-icons/fa";

const DetailsPostPage = () => {
  const postData = useLoaderData();
  
  const { _id, coverImage, title, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail } = postData;

  return (
    <div className="bg-gradient-to-br from-[#4A7856] to-[#95AA9B] text-[#06141B] shadow-lg flex flex-col sm:flex-row items-center sm:items-start w-full h-auto p-6 lg:p-8 gap-6 rounded-lg border border-[#CFDAC7]">
      
      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
        <img
          src={coverImage}
          alt={title}
          className="w-full max-w-[400px] sm:max-w-[100%] h-auto object-cover shadow-md rounded-lg border-4 border-[#EFD8C9]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-1/2 sm:pl-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#EFD8C9] mb-4 text-center sm:text-left">
          {title}
        </h1>
        <p className="text-base sm:text-lg mb-4 text-justify text-[#FAE7E2]">{description}</p>

        {/* Details with Icons */}
        <p className="flex items-center text-lg mb-2 text-[#FAE7E2]">
          <FaClipboardList className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Category: </span> {category}
        </p>
        
        <p className="flex items-center text-lg mb-2 text-[#FAE7E2]">
          <FaMapMarkerAlt className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Location: </span> {location}
        </p>

        <p className="flex items-center text-lg mb-2 text-[#FAE7E2]">
          <FaCalendarAlt className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Deadline: </span> {deadline}
        </p>

        
        <p className="flex items-center text-lg mb-2 text-[#FAE7E2]">
          <FaUsers className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Volunteers Needed: </span> {volunteersNeeded}
        </p>

        <p className="flex items-center text-lg mb-2 text-[#FAE7E2]">
          <FaUser className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Organizer: </span> {organizerName}
        </p>

        <p className="flex items-center text-lg mb-6 text-[#FAE7E2]">
          <FaEnvelope className="text-[#EC9C85] mr-2" /> 
          <span className="font-semibold text-[#EC9C85]">Contact: </span> {organizerEmail}
        </p>

        {/* If No Volunteers Needed */}
        {volunteersNeeded === 0 ? (
          <p className="text-red-500 text-center sm:text-left font-semibold">
            No more volunteers needed for this post.
          </p>
        ) : null}

        {/* Volunteer Button */}
        <div className="card-actions justify-center sm:justify-start mt-4">
          <Link to={`/volunteer/${_id}`}>
            <button
              className="btn bg-[#EC9C85] hover:bg-[#EFD8C9] text-[#06141B] border-none px-6 py-2 rounded-md w-full sm:w-auto shadow-md"
              disabled={volunteersNeeded === 0} // Disable if no volunteers needed
            >
              Be a Volunteer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPostPage;
