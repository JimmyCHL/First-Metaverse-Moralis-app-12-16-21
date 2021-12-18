import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute w-full z-50 h-4/6 items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://www.impactlab.com/wp-content/uploads/2019/05/8F5D09E9-C3B8-44A4-B5AB-77B9E43274D4.jpeg"
          height={200}
          width={200}
        />

        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
      </div>
      <div className="w-full h-screen relative">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
