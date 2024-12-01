import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Sidebarfooter from '../Components/Sidebarfooter';

const Sidebar = () => {



  return (
    <div className={`bg-[#121212] h-[15%] rounded flex flex-col justify-around `}>
      
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon}  alt="Library Icon" />
            <p className="font-semibold text-gray-400 hover:text-white">
              Your Library
            </p>
            
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className="overflow-y-auto h-[360%] mt-4 group scrollbar-none hover:scrollbar scrollbar-thumb-gray-400">
          <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col gap-2 shadow-md h-32">
            <p className="text-white">Create your first playlist</p>
            <p className="text-gray-400 text-sm">It's easy, we will help you</p>
            <button className="bg-white text-black px-4 py-2 w-32 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Create playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col gap-2 shadow-md h-32">
            <p className="text-white">Let's find some podcasts to follow</p>
            <p className="text-gray-400 text-sm">
              We will keep you updated on new episodes
            </p>
            <button className="bg-white text-black w-40 px-4 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
              Browse podcasts
            </button>
          </div>
        </div>
        <Sidebarfooter />
      </div>
      
    </div>
  );
};

export default Sidebar;
