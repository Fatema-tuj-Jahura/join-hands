import { FaCheckCircle } from "react-icons/fa";
import aboutImage1 from "../../assets/About1.jpg";
import aboutImage2 from "../../assets/About2.jpg";

const About = () => {
  return (
    <section className="bg-[#F9F2EC] py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={aboutImage2}
          alt="About Background"
          className="w-72 md:w-96 rounded-lg shadow-lg border-4 border-[#95AA9B]"
        />
        <img
          src={aboutImage1}
          alt="About Overlay"
          className="w-60 md:w-80 absolute -bottom-10 -right-6 rounded-lg border-4 border-[#35522B] shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 text-[#6A7F72]">
        <h3 className="uppercase text-lg font-semibold border-b-2 border-[#EC9C85] w-24 mb-4">About Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#6A7F72]">Work Together to Create Change</h2>
        <p className="text-gray-600 mt-4">
          Join Hands is dedicated to making a positive impact on communities by connecting volunteers
          with meaningful opportunities. Our mission is to support social causes and drive positive
          change through collective effort.
        </p>
        <ul className="mt-6 space-y-3 text-[#6A7F72]">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#EC9C85]" /> Empowering communities through collaboration
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#EC9C85]" /> Making volunteering accessible for everyone
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#EC9C85]" /> Supporting impactful social initiatives
          </li>
        </ul>
        <button className="mt-6 bg-[#EC9C85] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#EFD8C9] transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;
