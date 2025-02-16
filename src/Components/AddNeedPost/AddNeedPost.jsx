import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import importedImage from "../../assets/add-post.jpg";

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
    

    const volunteerPost = { coverImage, title, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail };
    console.log(volunteerPost);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#95AA9B] p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
        {/* Left Section: Image */}
        <div className="hidden md:block">
          <img src={importedImage} alt="Volunteer" className="w-full h-full object-contain" />
        </div>
        
        {/* Right Section: Form */}
        <div className=" p-8 bg-[#ddead1] ">
        <h2 className="text-2xl font-bold text-[#6A7F72] mb-4">Add Volunteer Need Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered w-full" required /> */}
          {/* <label className="label text-[#C7B7A3] font-semibold tracking-wide">Game Cover URL</label> */}
            <input
              type="url"
              name="thumbnail"
              placeholder="Thumbnail URL"
              className="input input-bordered  text-black w-full rounded-md"
              required
            />
          <input type="text" name="title" placeholder="Post Title" className="input input-bordered w-full" required />
          <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>
          
          <select name="category" className="select select-bordered w-full" required>
            <option disabled selected>Choose Category</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social-service">Social Service</option>
            <option value="animal-welfare">Animal Welfare</option>
          </select>
          
          <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
          <input type="number" name="volunteersNeeded" placeholder="No. of Volunteers Needed" className="input input-bordered w-full" required />
          
          <div>
            <label className="block text-gray-600">Deadline</label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="input input-bordered w-full"
              name="deadline"
              required
            />
          </div>
          
          <input type="text" name="organizerName" value={user?.displayName || "Anonymous"} className="input input-bordered w-full" readOnly />
          <input type="email" name="organizerEmail" value={user?.email || "No Email"} className="input input-bordered w-full" readOnly />
          
          <button type="submit" className="btn bg-[#EC9C85] text-white hover:bg-[#E8D8C4] w-full">Add Post</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddNeedPost;


