import React from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = ({ setIsOpen }) => {
  const { user } = useMoralis();
  return (
    <div className=" sticky top-0 p-5 z-20 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-16 w-16 mx-auto hidden lg:inline-block">
          <Image
            layout="fill"
            className="rounded-full object-cover"
            src="https://www.impactlab.com/wp-content/uploads/2019/05/8F5D09E9-C3B8-44A4-B5AB-77B9E43274D4.jpeg"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          {/* Avatar */}
          <div className="h-36 w-36 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress={true} />
          </div>

          {/* Welcome Message */}
          <h1 className="text-2xl ">Welcome to my metaverse</h1>
          {/* username */}
          <h2 className="text-4xl font-bold truncate">{user.getUsername()}</h2>
          {/* change username component */}
          <ChangeUsername setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
