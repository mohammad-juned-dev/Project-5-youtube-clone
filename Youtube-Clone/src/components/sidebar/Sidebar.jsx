import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({sidebar , category ,setCategory}) => {
  const labelClass = sidebar ? "block" : "hidden";
  const itemClass = sidebar
    ? "flex w-max items-center gap-5 transition-all duration-[500ms] cursor-pointer  transition-all duration-300"
    : "flex w-10 items-center justify-center transition-all duration-[500ms] cursor-pointer  transition-all duration-300";

  return (
    <div id="sidebar"
      className={`fixed left-0 top-[50px] z-20 h-[calc(100vh-50px)] ${sidebar ? "w-60 px-5" : "w-[72px] px-4"} py-5 overflow-x-hidden overflow-y-auto transition-all duration-[500ms] shadow-[10px_0_8px_-4px_rgba(0,0,0,0.1)]`}
    >
      <div className="flex flex-col gap-5 border-b border-1 border-gray-200">
        <div className={`${itemClass} ${category===0?"border-b-2 border-red-500":""}`}   onClick={()=>setCategory(0)}>
          <img className="h-5 w-5" src={home} alt="" />
          <p className={labelClass} >Home</p>
        </div>
        <div className={`${itemClass} ${category===20?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(20)}>
          <img className="h-5 w-5" src={game_icon} alt="" />
          <p className={labelClass}>Gaming</p>
        </div>
        <div className={`${itemClass} ${category===2?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(2)}>
          <img className="h-5 w-5" src={automobiles} alt="" />
          <p className={labelClass}>Automobiles</p>
        </div >
        <div className={`${itemClass} ${category===17?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(17)}>
          <img className="h-5 w-5" src={sports} alt="" />
          <p className={labelClass}>Sports</p>
        </div>
        <div className={`${itemClass} ${category===24?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(24)}>
          <img className="h-5 w-5" src={entertainment} alt="" />
          <p className={labelClass}>Entertainment</p>
        </div>
        <div className={`${itemClass} ${category===28?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(28)}>
          <img className="h-5 w-5" src={tech} alt="" />
          <p className={labelClass}>Tech</p>
        </div >
        <div className={`${itemClass} ${category===10?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(10)}>
          <img className="h-5 w-5" src={music} alt="" />
          <p className={labelClass}>Music</p>
        </div>
        <div className={`${itemClass} ${category===22?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(22)}>
          <img className="h-5 w-5" src={blogs} alt="" />
          <p className={labelClass}>Blogs</p>
        </div>
        <div className={`${itemClass} ${category===25?"border-b-2 border-red-500":""}`} onClick={()=>setCategory(25)}>
          <img className="h-5 w-5" src={news} alt="" />
          <p className={labelClass} >News</p>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-5 pt-4">
        <h3 className={`${labelClass}`}>Subscribed</h3>
        <div className={itemClass}>
          <img  className="h-5 w-5 rounded-full" src={jack} alt="" />
          <p className={labelClass}>pewdipie</p>
        </div>
        <div className={itemClass}>
          <img  className="h-5 w-5 rounded-full" src={simon} alt="" />
          <p className={labelClass}>simon</p>
        </div>
        <div className={itemClass}>
          <img  className="h-5 w-5 rounded-full" src={tom} alt="" />
          <p className={labelClass}>tom</p>
        </div >
        <div className={itemClass}>
          <img  className="h-5 w-5 rounded-full" src={megan} alt="" />
          <p className={labelClass}>megan</p>
        </div>
        <div className={itemClass}>
          <img  className="h-5 w-5 rounded-full" src={cameron} alt="" />
          <p className={labelClass}>cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
