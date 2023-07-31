import { FaUserCircle, FaRegEdit, FaTasks } from "react-icons/fa";
import { BiSolidCog, BiUserPin } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineAccessTime, MdOutlinePhoneInTalk } from "react-icons/md";
import { PiCardsBold, PiShieldStar } from "react-icons/pi";
import { BsFlag } from "react-icons/bs";

import Tab from "./Tab";

export default function Sidebar(): JSX.Element {
  return (
    <div className="w-full h-full bg-primaryGray py-32 px-10">
      <div className="w-full h-full bg-white rounded-lg shadow-md flex flex-col p-10 gap-10 px-4 overflow-y-scroll hidescrollbar">
        <div className="flex w-full items-center gap-4 px-6">
          <FaUserCircle size={50} />
          <div className="flex flex-col font-semibold">
            <div className="flex items-center gap-1 ">
              <span>Username</span>
              <BiSolidCog className="text-primary" size={20} />
            </div>
            <span className="text-xs font-normal text-rose-500">ADMIN </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <Tab title="Dashboard" Icon={AiOutlineAppstore} />
          <Tab title="User Manager" Icon={BiUserPin} />
          <Tab title="Quote Manager" Icon={RiMoneyDollarBoxLine} />
          <Tab title="Contract Manager" Icon={FaRegEdit} size={24} />
          <Tab title="Project Manager" Icon={FaTasks} />
          <Tab title="Invoice Manager" Icon={LiaFileInvoiceSolid} />
          <Tab title="Time Card" Icon={MdOutlineAccessTime} />
          <Tab title="Blog Manager" Icon={PiCardsBold} />
          <Tab title="Rules & Sections" Icon={PiShieldStar} />
          <Tab title="Contact us Manager" Icon={MdOutlinePhoneInTalk} />
          <Tab title="Report Manager" Icon={BsFlag} />
        </div>
      </div>
    </div>
  );
}
