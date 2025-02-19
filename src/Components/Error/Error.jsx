import React from "react";
import ErrorImage from "../../assets/Error.png";
import { Bounce, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Slide direction="down">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      </Slide>

      <Bounce>
        <img
          src={ErrorImage}
          alt="Error"
          className="w-[400px] h-auto animate-pulse"
        />
      </Bounce>

      <Slide direction="up">
        <p className="text-lg text-gray-600 mt-4">
          The page you're looking for doesn't exist.
        </p>
      </Slide>

      <Slide direction="up" delay={300}>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </Slide>
    </div>
  );
};

export default Error;
