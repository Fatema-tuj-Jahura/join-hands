import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const UpdateVolunteerPost = () => {
  const postData = useLoaderData();
  const navigate = useNavigate();
  const {_id, coverImage, title, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail } = postData;
  
  const [updatedDeadline, setUpdatedDeadline] = useState(new Date(deadline));

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCoverImage = form.coverImage.value;
    const updatedTitle = form.title.value;
    const updatedDescription = form.description.value;
    const updatedCategory = form.category.value;
    const updatedLocation = form.location.value;
    const updatedVolunteersNeeded = form.volunteersNeeded.value;

    const updatedPost = {
      coverImage: updatedCoverImage,
      title: updatedTitle,
      description: updatedDescription,
      category: updatedCategory,
      location: updatedLocation,
      volunteersNeeded: updatedVolunteersNeeded,
      deadline: updatedDeadline,
    };

    fetch(`https://join-hands-server.vercel.app/volunteer/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer post updated successfully!",
            icon: "success",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK",
          });
        }
        navigate('/manageNeedPost');
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-[#E6F4EA]">
      <div className="card bg-[#D9F2D9] w-full max-w-3xl p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#2E7D32] mb-6">
          Update Volunteer Need Post
        </h2>
        <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4">
          <label className="text-[#1B5E20]">Thumbnail (Cover Image URL):</label>
          <input type="url" name="coverImage" defaultValue={coverImage} className="input input-bordered w-full border-green-500" required />

          <label className="text-[#1B5E20]">Post Title:</label>
          <input type="text" name="title" defaultValue={title} className="input input-bordered w-full border-green-500" required />

          <label className="text-[#1B5E20]">Description:</label>
          <textarea name="description" defaultValue={description} className="textarea textarea-bordered w-full border-green-500" rows="4" required></textarea>

          <label className="text-[#1B5E20]">Category:</label>
          <select name="category" defaultValue={category} className="select select-bordered w-full border-green-500" required>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>

          <label className="text-[#1B5E20]">Location:</label>
          <input type="text" name="location" defaultValue={location} className="input input-bordered w-full border-green-500" required />

          <label className="text-[#1B5E20]">Number of Volunteers Needed:</label>
          <input type="number" name="volunteersNeeded" defaultValue={volunteersNeeded} className="input input-bordered w-full border-green-500" required />

          <label className="text-[#1B5E20]">Deadline:</label>
          <DatePicker selected={updatedDeadline} onChange={(date) => setUpdatedDeadline(date)} className="input input-bordered w-full border-green-500" required />

          <label className="text-[#1B5E20]">Organizer Name:</label>
          <input type="text" name="organizerName" defaultValue={organizerName} className="input input-bordered w-full border-green-500 bg-gray-100" readOnly />

          <label className="text-[#1B5E20]">Organizer Email:</label>
          <input type="email" name="organizerEmail" defaultValue={organizerEmail} className="input input-bordered w-full border-green-500 bg-gray-100" readOnly />

          <button type="submit" className="btn w-full mt-4 bg-[#4CAF50] text-white hover:bg-[#388E3C]">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateVolunteerPost;
