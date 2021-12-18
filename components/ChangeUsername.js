import React from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = ({ setIsOpen }) => {
  const { isUserUpdating } = useMoralis();

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="text-sm absolute top-5 right-6">
      <button
        onClick={openModal}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change username
      </button>
    </div>
  );
};

export default ChangeUsername;
