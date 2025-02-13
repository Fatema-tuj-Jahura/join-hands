import contactImage from "../../assets/contact.jpg";
import { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(null);

  const toggleDropdown = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I find local volunteering opportunities?",
      answer: "You can find opportunities through local NGOs, community centers, or online platforms like VolunteerMatch and Idealist.",
    },
    {
      question: "Do I need any experience to volunteer?",
      answer: "No experience is needed for most volunteer roles! Organizations often provide training for new volunteers.",
    },
    {
      question: "How much time do I need to commit as a volunteer?",
      answer: "Time commitment varies. Some roles require just a few hours, while others need a longer commitment. Choose what suits you best!",
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes! Many organizations offer online volunteering options like tutoring, translation, or digital marketing support.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0C4D46] to-[#c7ddb5] py-16 px-6 flex flex-col md:flex-row gap-6 shadow-lg">
      
      {/* Left Side - Image with text */}
      <div className="flex-1 relative p-6">
        <img
          src={contactImage}
          alt="Community Volunteering"
          className="w-full h-full rounded-2xl object-cover"
        />
        <div className="ml-2 absolute top-6 left-6 text-white text-xl font-bold">
          Community Volunteering
        </div>
        
        {/* Icons aligned below text */}
        <div className="ml-2 absolute top-16 left-6 flex space-x-4">
          <span className="bg-white p-3 rounded-full shadow-md">🤝</span> 
          <span className="bg-white p-3 rounded-full shadow-md">❤️</span> 
          <span className="bg-white p-3 rounded-full shadow-md">🌍</span> 
        </div>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex-1 bg-[#0F6157] text-white p-8 rounded-2xl shadow-md">
        <h4 className="uppercase text-sm tracking-wide border-b border-gray-300 pb-2 mb-4">
          Contact Us
        </h4>
        <h2 className="text-2xl font-bold">Do you have a question?</h2>
        <p className="mt-4 text-sm text-gray-200">
          Volunteering helps communities, builds skills, and provides a sense of fulfillment.
        </p>
        
        {/* FAQ Dropdown Questions */}
        <div className="mt-6 space-y-2">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full bg-[#0C4D46] p-3 rounded-lg flex justify-between items-center text-white transition-all"
                onClick={() => toggleDropdown(index)}
              >
                {faq.question} <span>{open === index ? "▲" : "▼"}</span>
              </button>
              {open === index && (
                <p className="bg-[#22736E] p-3 rounded-lg mt-2 text-gray-200 text-sm transition-all">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <button className="mt-6 bg-[#95AA9B] text-white py-2 px-6 rounded-xl font-semibold hover:bg-[#249D91] transition-all">
          Let Join Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
