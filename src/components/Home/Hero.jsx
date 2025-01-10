// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return <div className="h-screen md:h-[75vh] flex flex-col md:flex-row items-center justify-center">
//     <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
//        <h1 className=" text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
//          Discover Your Next Great Read
//        </h1>
//        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
//           Uncover captivating stories, enriching knowledge, and endless
//           inspiration in our curated collection of books
//        </p>
//        <div className="mt-4">
//        <Link 
//        to="/all-books"
//        className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full">
//         Discover Books
//        </Link>
//        </div>
//     </div>
//     <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
//        <img src="./hero.png"/>
//     </div>
//   </div>;
// };

// export default Hero;

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen md:h-[75vh] flex flex-col md:flex-row items-center justify-center bg-white">
      <div className="w-full ml-8 mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-blue-700 text-center lg:text-left">
          Optimize Hospital Nutrition
        </h1>
        <p className="mt-4 text-xl text-blue-500 text-center lg:text-left">
          Manage patient diets, streamline meal schedules, and enhance care with 
          our advanced food management system.
        </p>
        {/* <div className="mt-4">
          <Link
            to="/get-started"
            className="text-blue-500 text-xl lg:text-2xl font-semibold border border-blue-700 px-10 py-3 hover:bg-zinc-800 rounded-full"
          >
            Get Started
          </Link>
        </div> */}
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img
          src="./hero.png"
          alt="Hospital Food Management"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

