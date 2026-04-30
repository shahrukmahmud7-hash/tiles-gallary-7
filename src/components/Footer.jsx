import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
          <footer className="bg-[#F3F4F6] text-[#1F2937] mt-10 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 py-10  grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-3">Tiles Gallery</h2>
          <p className="text-sm text-[#475569]">
            Discover premium tile designs to transform your spaces with style, elegance, and creativity.
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            <li className="flex items-center justify-center gap-2
             hover:text-red-500 cursor-pointer"
            >
            <FaFacebookSquare className="" />
             Facebook 
             </li>
            <li className=" flex items-center justify-center gap-2
            hover:text-red-500 cursor-pointer "
            >
              <FaSquareInstagram className="" />
                Instagram
            </li>
            <li className=" flex items-center justify-center gap-2
            hover:text-red-500 cursor-pointer"
            >
               <BsTwitterX />
                Twitter
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-[#475569]">
            Email: support@tilesgallery.com
          </p>
          <p className="text-sm text-[#475569]">
            Phone: +880 1234 567890
          </p>
          <p className="text-sm text-[#475569]">
            Location: Rajshahi New Market
          </p>
          <p className="text-sm text-[#475569]">
            Country : Bangladesh 
          </p>
        
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-[#94A3B8] border-t border-[#E5E7EB]">
        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
    );
};

export default Footer; 