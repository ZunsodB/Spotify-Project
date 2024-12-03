import { songsData} from '../assets/assets'
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { BiRepeat, BiShuffle } from "react-icons/bi";
import {  FaPlay } from "react-icons/fa";
import Fullscreen from '../assets/images/Full screen.png'
import { FiPlusCircle } from "../Utils/icons";
import LyricsIcon from '../assets/images/Lyrics.png' 
import Volume from '../assets/images/Volume.png'
import Queue from '../assets/images/Queue.png'
import Speaker from '../assets/images/Connect to a device.png'
const MusicPlayer = () => {
  return (
    <div className="w-auto   flex py-[1.1%] items-center justify-between bottom-0 h-auto bg-black mx-[1.1vw]">
        <div className="w-2/12">
            <div className="flex items-center gap-2 relative">
                <img src={songsData[0].image} alt="" className="h-[8vh] rounded-md" />
                <div className="flex flex-col justify-center mx-[0.7vw]">
                    <h3 className="text-sm font-normal mb-1 text-white">
                        {songsData[0].name || "hi"}
                    </h3>
                    <span className="text-xs text-[rgba(178,178,178)]">
                        {songsData[0].desc.slice(0, 12) || "bndi"}
                    </span>
            </div>
                <button className="relative group">
                    <FiPlusCircle className="text-[rgba(178,178,178)] text-[2.5vh] hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
                    <div className="absolute hidden text-white bg-[rgba(31,31,31)] px-1 py-1 rounded-md w-[10vw] text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:block group-hover:translate-y-[-4rem] top-full left-1/2 transform -translate-x-1/2">
                        Add to Liked Songs
                    </div>
                </button>
            </div>
        </div>

        <div className="w-5/12">
            <div className="flex justify-center items-center mb-2 gap-6">
                <BiShuffle color="white" />
                <IoMdSkipBackward color="white"  />
                <button className='flex items-center rounded-[50%] bg-white justify-center p-2' >
                  <FaPlay className='text-black text-lg ml-[2.5px]' />
                </button>
                {/* {0 ? (
                    <button
                        onClick={handleMaster}
                        className="flex items-center rounded-[50%] bg-white justify-center p-2"
                    >
                        <FaPause className="text-black text-lg" />
                    </button>
                ) : (
                    <button
                        onClick={handleMaster}
                        className="flex items-center rounded-[50%] bg-white justify-center p-2"
                    >
                        <FaPlay className="text-black text-lg" />
                    </button>
                )} */}
                <IoMdSkipForward color="white" />
                <BiRepeat color="white"/>
            </div>
            <div className="flex items-center gap-2">
                {/* <span className="text-xs">0</span>
                <input
                    type="range"
                    name=""
                    min={0}
                    // value={progress}
                    // disabled={!masterSong.mp3}
                    // onChange={changeProgress}
                    className="w-full block"
                    max={100}
                />
                <span className="text-xs">hi </span> */}
                <div className='w-[60vw] max-w-[800px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
            </div>
        </div>



        <div className="w-[18vw] flex items-center gap-[1.2vw]">
                    
            <img src={LyricsIcon} alt="" className="h-[2.1vh] w-10px hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <img src={Queue} alt="" className="h-[2.1vh] w-10px hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <img src={Speaker} alt="" className="h-[2.1vh] w-10px hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
            <div className='volume flex flex-row w-[63vw] gap-2 items-center hover:brightness-200 transform transition-transform duration-50 '>
                <img src={Volume} alt="" className="h-[2.1vh] w-10px hover:brightness-200 transform transition-transform duration-50 " />
            {/* <HiSpeakerXMark className="text-2xl" /> */}
            {/* <input
                type="range"
                name=""
                min={0}
                className="w-1/2 block"
                max={100}
            /> */}

            {/* Duunii changa sul taaruulah heseg */}
                <div className='w-[7vw] h-1 bg-white rounded-full cursor-pointer'>
                <hr className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
            </div>
            <img src={Fullscreen} alt="" className="h-[2vh] w-10px hover:brightness-200 transform transition-transform duration-50 hover:scale-105" />
        </div>
    </div>
  );
}

export default MusicPlayer