import Sidebarfooter from '../Components/Sidebarfooter';
import { assets } from '../assets/images/assets';
import { GoPlus } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Sidebar = () => {
  return (
    <div className={`bg-[#121212] h-[15%] rounded flex flex-col justify-around w-full `}>
      <div className="bg-[#121212] h-[90%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6 text-gray-400" src={assets.stack_icon}  alt="Library Icon" />
            <p className="font-semibold text-[rgba(179,179,179)] hover:text-white">
              Your Library
            </p>
            
          </div>
          <div className="flex items-center gap-2">
            <button className='p-1 group relative rounded-full hover:bg-[rgba(31,31,31)]'>
              <GoPlus className='h-6 w-6 text-[rgba(179,179,179)] hover:brightness-200 transform transition-transform duration-50'/>
              <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-2 py-1 rounded-md w-28 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4.5rem] top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                Create playlist
              </div>
            </button>
            <button className='p-1 group relative rounded-full hover:bg-[rgba(31,31,31)]'>
              <GoArrowRight className='h-6 w-6 text-[rgba(179,179,179)] hover:brightness-200 transform transition-transform duration-50'/>
              <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-2 py-1 rounded-md w-24 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4.5rem] top-full left-1/2 transform -translate-x-1/2 whitespace-nowrap text-center">
                Show more
              </div>
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-[360%] mt-4 group scrollbar-none hover:scrollbar scrollbar-thumb-gray-400">
          <div className="p-4 bg-[rgba(31,31,31)] m-2 rounded-lg font-medium text-white flex flex-col gap-2 shadow-md h-32.5">
            <p className=" font-semibold">Create your first playlist</p>
            <p className="font-light text-sm">It&#39;s easy, we will help you</p>
            <button className="my-2 bg-white text-black px-4 py-2 w-32 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
              Create playlist
            </button>
          </div>
          <div className="p-4 bg-[rgba(31,31,31)] m-2 rounded-lg font-medium text-white flex flex-col gap-2 shadow-md h-32.5">
            <p className=" font-semibold">Let&#39;s find some podcasts to follow</p>
            <p className="font-light text-sm">
              We will keep you updated on new episodes
            </p>
            <button className="my-2 bg-white text-black w-40 px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
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
