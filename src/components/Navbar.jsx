"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 sticky top-0 z-50 bg-white shadow-md ">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full ">

        {/* Logo here */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/tile-logo2.jpg"}
            alt="logo"
            width={60}
            height={60}
          />
          <h3 className="font-black text-lg bg-gradient-to-r from-slate-800 via-blue-600 to-slate-500 bg-clip-text text-transparent "
          >
            Tiles Gallery</h3>
        </div>

        {/* Nav all linlks are here */}
        <ul className="flex items-center gap-5 text-[#706F6F] text-sm mx-auto w-fit">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-tiles">All Tiles</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>
        
         <ul className="flex gap-5 text-[#706F6F] text-sm items-center justify-end">
            <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;