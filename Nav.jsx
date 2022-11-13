import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

let Links = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "CONTACT US", link: "/" },
  { name: "BLOG", link: "/" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="container mx-auto md:flex bg-white py-4 md:px-10 px-7 items-center justify-between">
        <div className="font-bold text-2xl cursor-pointer gap-2 flex items-center font-[Poppins]">
          <BsCircle />
          <span>Designer</span>
        </div>
        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className={`${open ? "hidden" : "visible"} `}>
            <RiMenu2Fill size={27} />
          </div>
          <div className={`${open ? "visible" : "hidden"} `}>
            <IoMdClose size={27} />
          </div>
        </div>

        <ul
          className={`md:flex md:items-center gap-10 cursor-pointer md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-500px]"
          } `}
        >
          {Links.map((link) => (
            <li
              key={link?.name}
              className=" text-xl text-gray-800 hover:text-indigo-400 duration-500 md:my-0 my-7"
            >
              <a href={link?.link}>{link?.name}</a>
            </li>
          ))}
          <button className="px-4 py-2 text-white bg-indigo-700 border-[1px] border-indigo-600 hover:bg-transparent transition-all hover:text-indigo-500  rounded-md">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
