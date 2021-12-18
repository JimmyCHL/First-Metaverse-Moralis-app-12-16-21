import React, { useState } from "react";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Modal from "../components/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, isInitialized } = useMoralis();
  // console.log(isInitialized);
  // console.log(isAuthenticated);
  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-violet-500 bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Fist Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <Header setIsOpen={setIsOpen} />

        {/* Messages */}
        <Messages />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
