"use client"

import { ProfileUpdat } from "@/components/ProfileUpdate";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";

const MyProfilePage = () => {
   
    const { data: session } = authClient.useSession()
     const user = session?.user;

    return (
        <div className="mt-10 flex items-center justify-center ">

      <Card className="max-w-sm w-full p-6 rounded-2xl shadow-xl 
       border border-red-400 bg-white text-center">

        <div className="flex justify-center">
          <Avatar className="h-24 w-24 ring-2 ring-red-700 ">
            <Avatar.Image
              alt={user?.name}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">
            {user?.name}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {user?.email}
          </p>
        </div>

        <div className="my-5 border-t border-gray-200
        ">
        </div>
        <p className="text-gray-400 text-sm">
          Welcome to your profile dashboard
        </p>
        {/* <div className="flex gap-3 justify-center mt-2">
          <Button className="bg-red-600 text-white px-4 
          py-2 rounded-md hover:bg-red-700
          ">
            Edit Profile
          </Button>
          <Button variant="outline">
            Logout
          </Button>
        </div> */}
        <div className="">
             <ProfileUpdat/>
        </div>
       
      </Card>
    </div>
    );
};

export default MyProfilePage; 