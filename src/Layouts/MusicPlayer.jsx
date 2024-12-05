import React, { useContext } from 'react'
import {assets, songsData} from '../assets/assets'
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { BiRepeat, BiShuffle } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { LuMonitorSpeaker } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import {  PiQueueLight } from "react-icons/pi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbWindowMaximize } from "react-icons/tb";
import { HiSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import { BsArrowsAngleContract } from "react-icons/bs";
import { PlayerContext } from '../context/PlayerContext';

const MusicPlayer = () => {
    const {track,seekBar,seekbg,playStatus,play,pause,time,previous,next,seekSong}=useContext(PlayerContext);
  return (
    <div className="fixed w-full flex items-center justify-between bottom-0 left-0 h-20 bg-black">
        <div className="w-2/12">
            <div className="flex items-center gap-2">
                <img src={track?.image} alt="" className="h-12" />
                <div>
                    <h3 className="text-xs font-medium mb-1 text-white">
                        {track?.name || "Unknown Song"}
                    </h3>
                    <span className="text-[10px] text-white">
                        {track?.desc?.slice(0, 12) || "No description"}
                    </span>
                </div>
                <AiOutlineHeart color="white" className="ml-3" />

            </div>
        </div>



        <div className="w-5/12">
            <div className="flex justify-center items-center mb-2 gap-6">
                <BiShuffle color="white" />
                <IoMdSkipBackward color="white" onClick={previous} className="cursor-pointer" />
                <button 
                    onClick={playStatus ? pause : play}
                    className='flex items-center rounded-[50%] bg-white justify-center p-2' 
                >
                  {playStatus ? <FaPause className='text-black text-lg' /> : <FaPlay className='text-black text-lg' />} 
                </button>
                <IoMdSkipForward color="white" onClick={next} className="cursor-pointer" />
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
                <p className='text-white'>{time.currentTime.minute}:{time.currentTime.seconds}</p>
                <div ref={seekbg} className='w-[60vw] max-w-[800px] bg-gray-300 rounded-full cursor-pointer' onClick={seekSong}>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>
                <p className='text-white'>{time.totalTime.minute}:{time.totalTime.seconds}</p>
            </div>
        </div>



        <div className="w-2/12 flex items-center gap-2">
            <AiOutlinePlaySquare color="white" className="text-2xl" />
            <TbMicrophone2 color="white" className="text-2xl" />
            <PiQueueLight color="white"  className="text-2xl" />
            <LuMonitorSpeaker color="white" className="text-2xl" />
            < HiOutlineSpeakerWave color="white" className="text-2xl" />

            {/* <HiSpeakerXMark className="text-2xl" /> */}
            {/* <input
                type="range"
                name=""
                min={0}
                className="w-1/2 block"
                max={100}
            /> */}

            {/* Duunii changa sul taaruulah heseg */}
            <div  className='w-[60vw] max-w-[70px] bg-gray-300 rounded-full cursor-pointer'>
                <hr  className='h-1 border-none w-0 bg-green-800 rounded-full'/>
            </div>


            <TbWindowMaximize color="white" className="text-2xl" />
            <BsArrowsAngleContract color="white" />
        </div>
    </div>
  );
}

export default MusicPlayer