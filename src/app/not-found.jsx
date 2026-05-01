import Link from "next/link";
import { IoMdFootball } from "react-icons/io";


const NotFoundPage = () => {
    return (
         <div className="min-h-screen flex items-center 
         justify-center bg-[#FAFAF9] px-6
         ">
      
      <div className=" text-center
      ">
        
        {/* Animation */}
        <div className=" flex items-center justify-center text-6xl animate-bounce mb-4
        ">
           <IoMdFootball  />
        </div>

        <h1 className="text-7xl md:text-9xl 
        font-extrabold text-gray-800 animate-pulse
        ">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl 
        font-semibold mt-4 text-gray-700
        ">
          Oops! What just happened?
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500
         max-w-md mx-auto
         ">
          Looks like this page went missing... maybe it got lost in the tiles! 🧱
        </p>

        <div className="mt-6">
          <Link href="/">
            <button className="px-6 py-3 rounded-md text-white
             shadow-md transition 
            bg-gradient-to-r from-red-500 via-gray-800 to-slate-700 
            hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
    );
};

export default NotFoundPage;