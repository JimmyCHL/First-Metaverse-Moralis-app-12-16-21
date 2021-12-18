import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMoralis } from "react-moralis";

const Modal = ({ isOpen, setIsOpen }) => {
  const { setUserData, user } = useMoralis();
  const [userName, setUserName] = useState("");

  const setUsernameFun = (e) => {
    e.preventDefault();
    if (!userName) return;

    setUserData({
      username: userName,
    });

    setUserName("");
    setIsOpen(false);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0"
        onClose={() => setIsOpen(false)}
      >
        {/*
    Use one Transition.Child to apply one transition to the overlay...
  */}
        <div>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/*
    ...and another Transition.Child to apply a separate transition
    to the contents.
  */}

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-115"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-115"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex items-center justify-center h-[500px]">
              <div className="bg-fuchsia-600 p-5 rounded-md relative z-500">
                <h1 className="bg-white mt-50 text-[24px] font-bold p-2 rounded-md bg-opacity-30">
                  ~ Change Your username ~
                </h1>
                <h2 className="font-bold my-2 ">Current Username:</h2>
                <h3 className="font-semibold text-[12px] bg-white p-2 rounded-md bg-opacity-30">
                  {user.getUsername()}
                </h3>
                <h2 className="font-bold my-2 ">New Username:</h2>
                <form>
                  <input
                    className="bg-white placeholder-slate-300 p-2 rounded-md bg-opacity-30 border-none outline-none shadow-lg w-full font-[12px] font-semibold"
                    type="text"
                    placeholder="New username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />

                  <button
                    type="submit"
                    onClick={setUsernameFun}
                    className="my-2 mt-4 font-bold p-3 bg-pink-500 animate-pulse rounded-md block mx-auto hover:shadow-lg"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>

            {/* ... */}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
