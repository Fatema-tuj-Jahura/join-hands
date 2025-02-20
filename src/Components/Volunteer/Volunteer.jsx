import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert2";

const Volunteer = () => {
  const postData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState("");

  const {coverImage,title,description,category,location,volunteersNeeded,deadline,organizerName,organizerEmail,} = postData;

  const handleSubmit = (e) => {
    e.preventDefault();

    const volunteerData = {
      postId: postData._id,
      title,
      category,
      location,
      deadline,
      volunteersNeeded: Number(volunteersNeeded),
      organizerName,
      organizerEmail,
      volunteerName: user?.displayName || "Anonymous",
      volunteerEmail: user?.email || "No Email",
      suggestion,
      status: "requested",
    };
    console.log(volunteerData)
    // "https://join-hands-server.vercel.app/requestedVolunteer"
    fetch("https://join-hands-server.vercel.app/requestedVolunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal.fire("Success!", "Your request has been submitted! You can apply for more posts.", "success");
          navigate("/allPost");
        } else {
          swal.fire("Error!", "Something went wrong!", "error");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-[#E8F5E9] text-[#06141B] shadow-lg rounded-lg p-6 lg:p-8 max-w-3xl mx-auto my-10 border border-[#A5D6A7]">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#2E7D32] text-center mb-6">Volunteer Registration</h2>

      {/* Cover Image */}
      <img src={coverImage} alt={title} className="w-full h-48 object-cover rounded-lg border-2 border-[#66BB6A] mb-4" />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Title */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Post Title</label>
            <input type="text" value={title} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Category */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Category</label>
            <input type="text" value={category} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Location */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Location</label>
            <input type="text" value={location} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Deadline */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Deadline</label>
            <input type="text" value={deadline} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Volunteers Needed */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Volunteers Needed</label>
            <input type="text" value={volunteersNeeded} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Organizer Name */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Organizer Name</label>
            <input type="text" value={organizerName} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Organizer Email */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Organizer Email</label>
            <input type="email" value={organizerEmail} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Volunteer Name */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Your Name</label>
            <input type="text" value={user?.displayName || "Anonymous"} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>

          {/* Volunteer Email */}
          <div>
            <label className="text-[#2E7D32] font-semibold">Your Email</label>
            <input type="email" value={user?.email || "No Email"} readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
          </div>
        </div>

        {/* Suggestion Field */}
        <div>
          <label className="text-[#2E7D32] font-semibold">Your Suggestion</label>
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Enter your suggestion..."
            className="textarea textarea-bordered w-full bg-[#F1F8E9]"
          ></textarea>
        </div>

        {/* Status Field */}
        <div>
          <label className="text-[#2E7D32] font-semibold">Status</label>
          <input type="text" value="requested" readOnly className="input input-bordered w-full bg-[#F1F8E9]" />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button onClick={handleSubmit} type="submit" className="btn bg-[#4CAF50] hover:bg-[#388E3C] text-white px-6 py-2 rounded-md shadow-md">
            Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Volunteer;
