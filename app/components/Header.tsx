"use client";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";
import HeaderPopupContent from "./HeaderPopupContent";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="fixed z-50 flex w-full justify-between p-5 text-[16px] font-bold text-primary">
      <Link href={"/"} onClick={() => setIsModalOpen(false)}>
        <h2 className={`${isModalOpen ? "text-white" : "text-primary"} transition-colors duration-1000`}>K — W</h2>
      </Link>
      <div onClick={toggleModal} className="group relative flex aspect-square w-8 cursor-pointer">
        <div
          className={`absolute left-1/2 top-1/2 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${isModalOpen ? "bg-white" : "bg-primary"} transition-all duration-300 group-hover:w-8`}
        />
        <div
          className={`transition-color absolute left-1/2 top-1/2 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${isModalOpen ? "bg-white group-hover:bg-primary" : "bg-primary group-hover:bg-white"} duration-300`}
        />
        <div
          className={`transition-color absolute left-1/2 top-1/2 aspect-square w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full ${isModalOpen ? "bg-primary" : "bg-white"} opacity-0 duration-300 group-hover:opacity-100`}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        className="absolute inset-0 -z-10 flex aspect-square h-screen w-full bg-primary text-white"
      >
        <HeaderPopupContent />
      </Modal>
    </div>
  );
}
