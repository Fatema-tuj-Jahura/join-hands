import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import importedImage from "../../assets/add-post.jpg";
import swal from "sweetalert2";

const AddNeedPost = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    const form = e.target;
    const coverImage = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadline = form.deadline.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    

    const newPost = { coverImage, title, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail };
    console.log(newPost);
    // Add data
    fetch('https://join-hands-server.vercel.app/volunteer', {
        method: 'POST',
        headers: {
           'content-type': 'application/json'
        },
        body: JSON.stringify(newPost)
     })
     .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            swal.fire({
               title: "Success!",
               text: "You sucessfully adeed volunteer need post!!",
               icon: "success",
               confirmButtonColor: "#6A7F72",
               confirmButtonText: "Keep going",
            });
        }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#95AA9B] p-4">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
      {/* Left Section: Image */}
      <div className="hidden md:block relative">
        <img src={importedImage} alt="Volunteer" className="w-full h-full object-contain" />
        <div className="absolute bottom-0 flex items-center justify-center bg-white bg-opacity-75 p-4">
          <p className="text-[#6A7F72] text-sm text-center">Posting your volunteering opportunities helps connect passionate individuals with meaningful causes. Share your event details to inspire others to contribute and make a difference in the community.</p>
        </div>
      </div>
      
      {/* Right Section: Form */}
      <div className="p-8 bg-[#ddead1]">
        <h2 className="text-2xl font-bold text-[#6A7F72] mb-4">Add Volunteer Need Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-[#6A7F72] font-semibold">Thumbnail URL</label>
          <input type="url" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered text-black w-full rounded-md" required />
          
          <label className="block text-[#6A7F72] font-semibold">Post Title</label>
          <input type="text" name="title" placeholder="Post Title" className="input input-bordered w-full" required />
          
          <label className="block text-[#6A7F72] font-semibold">Description</label>
          <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>
          
          <label className="block text-[#6A7F72] font-semibold">Category</label>
          <select name="category" className="select select-bordered w-full" required>
            <option disabled selected>Choose Category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
          
          <label className="block text-[#6A7F72] font-semibold">Location</label>
          <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
          
          <label className="block text-[#6A7F72] font-semibold">No. of Volunteers Needed</label>
          <input type="number" name="volunteersNeeded" placeholder="No. of Volunteers Needed" className="input input-bordered w-full" required />
          
          <label className="block text-[#6A7F72] font-semibold">Deadline</label>
          <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} className="input input-bordered w-full" name="deadline" required />
          
          <label className="block text-[#6A7F72] font-semibold">Organizer Name</label>
          <input type="text" name="organizerName" value={user?.displayName || "Anonymous"} className="input input-bordered w-full" readOnly />
          
          <label className="block text-[#6A7F72] font-semibold">Organizer Email</label>
          <input type="email" name="organizerEmail" value={user?.email || "No Email"} className="input input-bordered w-full" readOnly />
          
          <button type="submit" className="btn bg-[#EC9C85] text-white hover:bg-[#E8D8C4] w-full">Add Post</button>
        </form>
      </div>
    </div>
  </div>
);

};

export default AddNeedPost;


