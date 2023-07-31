import Image from "next/image";
import { FiBell } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import { Logo } from "@ui";

export default function Header(): JSX.Element {
  return (
    <div className="w-full h-16 bg-white px-10 flex items-center justify-between shadow-lg absolute z-[99999]  ">
      <Logo />

      <div className="flex items-center gap-10 text-base">
        <span className="link-style">About Us</span>
        <span className="link-style">Services</span>
        <span className="link-style">Careers</span>
        <span className="link-style">Blog</span>
        <span className="link-style">Contact Us</span>
        <span className="link-style">Schedule a meeting</span>
        <div className="flex items-center gap-6">
          <FiBell size={20} />
          <AiOutlineMail size={20} />
          <FaUserCircle size={40} />
        </div>
      </div>
    </div>
  );
}
