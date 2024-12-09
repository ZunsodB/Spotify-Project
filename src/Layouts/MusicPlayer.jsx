import { IoIosPlayCircle } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { songsData } from "../assets/images/assets"; 
import { assets } from "../assets/images/assets";
import { Slider } from 'antd';
const MusicPlayer = () => {
  return (
    <div className="bg-black py-4 px-4 flex items-center justify-between fixed bottom-0 w-full shadow-lg">
      {/* Left Section */}
      <div className="flex items-center w-1/4">
        <img
          src={songsData[0]?.image}
          alt="Album Art"
          className="h-[57px] w-[57px] rounded-sm mr-4"
        />
        <div className="flex flex-col ">
          <p className="text-white text-sm font-medium">
            {songsData[0]?.name || "Song Name"}
          </p>
          <span className="text-gray-400 text-xs">
            {songsData[0]?.desc || "Artist Name"}
          </span>
        </div>
        <button className="relative group ml-4">
            <FiPlusCircle className="text-[rgba(178,178,178)] text-[2.5vh] hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] pt-2 pb-1 rounded-md w-[10vw] text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Add to Liked Songs
            </div>
        </button>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-6 mb-2">
          <button className="relative group">
            <img src={assets.shuffle_icon} alt="Shuffle" className="h-4 w-4.5 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-16 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Shuffle
            </div>
          </button>
          <button className="relative group">
            <img src={assets.prev_icon} alt="Previous" className="h-4 w-4 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-20 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Previous
            </div>
          </button>
          <button className="relative group"> 
            <IoIosPlayCircle className="text-white h-11 w-11 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-14 text-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-5rem] top-full left-1/2 transform -translate-x-1/2">
                Play
            </div>
          </button>
          <button className="relative group">
            <img src={assets.next_icon} alt="Next" className="h-4 w-4 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-12 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Next
            </div>
          </button>
          <button className="relative group">
            <img src={assets.repeat} alt="Repeat" className="h-4 w-4.5 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-16 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Repeat
            </div>
          </button>
        </div>
        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-[37vw]">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="flex-grow bg-[rgba(75,75,75)] h-1 rounded-full relative">
            <div
              className="bg-white h-1 rounded-full hover:bg-green-500"
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-xs text-gray-400">4:00</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end w-1/4 gap-5">
        <button className="relative group">
          <img src={assets.LyricsIcon} alt="Lyrics" className="h-4 w-4 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
          <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-14 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Lyrics
          </div>
        </button>
        <button className="relative group">
          <img src={assets.Queue} alt="Queue" className="h-4 w-4 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
          <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-14 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                Queue
          </div>
        </button>
        <button className="relative group">
          <img src={assets.Speaker} alt="Speaker" className="h-4 w-4 hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
          <div className="absolute hidden text-white bg-[rgba(31,31,31)] py-1 rounded-md w-36 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
              Connect to a device
          </div>
        </button>
        <div className="flex items-center gap-2 w-[8.9vw]">
          <img src={assets.Volume} alt="Volume" className="h-4 w-4" />
          <Slider
            className="w-[6.8vw] text-white"
            tooltip={{
              formatter: null,
            }}
          />
        </div>
        <button className="relative group">
          <img
            src={assets.Fullscreen}
            alt="Fullscreen"
            className="h-4 w-4 hover:brightness-200 transition"
          />
          <div className="absolute hidden text-white bg-[rgba(31,31,31)] py-1 rounded-md w-20 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full transform -translate-x-3/4">
              Full screen
          </div>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
