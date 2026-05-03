"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
   
  const pathname = usePathname();
  
  const linkStyle = (path) =>
  `flex items-center gap-2 ${
    pathname === path
      ? "bg-[#244D3F] text-white p-2 m-2 rounded-lg font-bold"
      : ""
  }`;

  const { data: session } = authClient.useSession()
  const user = session?.user;
  
  const handleLogOut = async () => {
    await authClient.signOut();
  }

  return (
    <div className="border-b px-2 sticky top-0 z-50 bg-white shadow-md ">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full ">

        {/* Logo here */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/tile-logo2.jpg"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg bg-gradient-to-r from-slate-800 via-blue-600 to-slate-500 bg-clip-text text-transparent "
          >
            Tiles Gallery</h3>
        </div>

        {/* Nav all linlks are here */}
        <ul className="flex items-center gap-5 
        text-[#706F6F] text-sm mx-auto w-fit">
         <li>
         <Link className={linkStyle("/")} 
         href="/">Home</Link>
        </li>

      <li>
       <Link className={linkStyle("/all-tiles")} 
       href="/all-tiles">All Tiles</Link>
     </li>

        <li>
        <Link className={linkStyle("/my-profile")} 
        href="/my-profile">My Profile</Link>
    </li>
        </ul>
        
         <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center gap-4 ">
              <li className="text-[#706F6F] text-sm">
                <Link href={"/login"}>Login</Link>
              </li>
              <li className="text-[#706F6F] text-sm" >
                <Link href={"/register"}>Register</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-2 items-center justify-center ">
              <Avatar >
                <Avatar.Image
                  alt="Tom Curise"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <button className="p-1.5 m-2 bg-amber-800  text-white
              rounded-lg " onClick={handleLogOut}>LogOut</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 