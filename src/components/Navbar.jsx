"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
   
  const pathname = usePathname();

  const linkStyle = (path) =>
  `flex items-center gap-2 ${
    pathname === path
      ? "bg-[#244D3F] text-white p-2 m-2 rounded-xl font-bold"
      : ""
  }`;

   const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession()
  const user = session?.user;
  
  const handleLogOut = async () => {
    await authClient.signOut();
    setOpen(false);
  }

  return (
     <div className="border-b px-2 sticky top-0 
     z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between
       py-3 max-w-7xl mx-auto px-3">

        <div className="flex items-center gap-2">
                <Image
          src="/tile-logo2.jpg"
          alt="logo"
          width={55}
          height={55}
       />

      <h3 className="font-black text-lg">
      Tiles Gallery
     </h3>
   </div>

    <button
    className="md:hidden text-2xl"
     onClick={() => setOpen(!open)}
      >
            ☰
      </button>
      
        <ul className="hidden md:flex items-center gap-4 text-sm">
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

        {/* AUTH */}
        <div className="hidden md:flex 
        items-center gap-3">

          {!user && (
            <>
              <Link href="/login" className="
              text-[#706F6F]">Login</Link>
              <Link href="/register" className="
              text-[#706F6F]">Register</Link>
            </>
          )}

          {user && (
            <div className="flex items-center gap-2">
              <Avatar>
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <button
                onClick={handleLogOut}
                className="px-2 py-1 text-sm bg-amber-800
                 text-white rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white 
        px-4 py-3 space-y-3 text-sm">

          <Link onClick={() => setOpen(false)}
           className={linkStyle("/")} href="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)}
           className={linkStyle("/all-tiles")} href="/all-tiles">
            All Tiles
          </Link>

          <Link onClick={() => setOpen(false)} 
          className={linkStyle("/my-profile")} href="/my-profile">
            My Profile
          </Link>

          {!user && (
            <div className="flex flex-col gap-2 pt-2">
              <Link onClick={() => setOpen(false)} href="/login">
                Login
              </Link>
              <Link onClick={() => setOpen(false)} href="/register">
                Register
              </Link>
            </div>
          )}

          {user && (
            <button
              onClick={handleLogOut}
              className="px-2 py-1 text-sm bg-amber-800
               text-white rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar; 