import React from "react";
import {Link} from "react-router-dom"
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import logo from "../../assets/logo.png";
import Sidebar from "../sidebar/Sidebar";
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="sticky top-0 z-30 w-full h-[50px] flex justify-between px-[1rem] shadow-[0_10px_8px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex gap-[1em] w-max  w-max p-3 items-center justify-center">
        <img
          className="h-4 w-4 cursor-pointer"
          src={menu_icon}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          alt=""
        />
        <Link to='/'><img className="h-6 w-25 cursor-pointer" src={logo} alt="" /></Link>
      </div>
      <div className="flex gap-[1em] w-max w-max border-black border-[1px] items-center justify-center px-3 rounded-full mt-2.5 mb-2.5">
        <input
          className="outline-none rounded-full px-3 w-[25em] border-none"
          type="text"
          placeholder="Search"
        />
        <img className="h-5 w-5 cursor-pointer" src={search_icon} alt="" />
      </div>
      <div className=" flex gap-[1.5em] w-max items-center justify-center px-3 rounded-full mt-2.5 mb-2.5">
        <img className="h-7 w-7 cursor-pointer" src={upload_icon} alt="" />
        <img className="h-7 w-7 cursor-pointer" src={more_icon} alt="" />
        <img
          className="h-7 w-7 cursor-pointer"
          src={notification_icon}
          alt=""
        />
        <img
          className="h-7 w-7 rounded-full cursor-pointer"
          src={profile_icon}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
