import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

const Home = ({ sidebar }) => {
const [category, setCategory] = useState(0)
  return (
    <div className="flex w-full min-w-0 ">
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}  />
      <div className="min-w-0 flex-1  pt-3 pl-3">
        <Feed  category={category} />
      </div>
    </div>
  );
};

export default Home;
