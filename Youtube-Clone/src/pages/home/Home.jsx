import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

const Home = ({ sidebar }) => {
const [category, setCategory] = useState(0)
  return (
    <div className="w-full min-w-0">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}  />
      <div className={`min-w-0 pt-3 pl-3 transition-[margin] duration-[500ms] ${sidebar ? "ml-60" : "ml-[72px]"}`}>
        <Feed  category={category} />
      </div>
    </div>
  );
};

export default Home;
