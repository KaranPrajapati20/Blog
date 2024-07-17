import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import Home from './Home';
import Signup from './Signup';
import Mypost from './Mypost';
import Profile from './Profile';
import Sports from './Sports';
import Post from './Post';
import Trending from './Trending';
import Music from './Music';
import Food from './Food';
import Business from './Business';
import Travel from './Travels';
import Health from './Health';
import Lifestyle from './Lifestyle';

const MainLayout = () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    return <Navigate to="/signup" />;
  }

  return (
    <>
      <Leftbar />
      <Rightbar />
      <div className="ml-[25%] md:mr-[25%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypost" element={<Mypost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/post" element={<Post />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/music" element={<Music />} />
          <Route path="/food" element={<Food />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
      </div>
    </>
  );
}

export default MainLayout;