import { createContext,useEffect,useRef, useState } from "react";
import { songsData } from '../assets/assets';

export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>{

const audioRef=useRef();
const seekbg=useRef();
const seekBar=useRef();
    const [track,setTrack]=useState(songsData.length > 0 ? songsData[0] : null);
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            seconds:0,
            minute:0
        },
        totalTime:{
            seconds:0,
            minute:0
        }
    })

    const play=()=>{
        if (audioRef.current) {
            audioRef.current.play();
            setPlayStatus(true)
        }
    }

    const pause=()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            setPlayStatus(false);
        }
    }

    const playWithId=async(id)=>{
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async()=>{
        if(track.id>0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async()=>{
        if(track.id<songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (e) => {
        if (audioRef.current && seekbg.current) {
            const seekTime = (e.nativeEvent.offsetX / seekbg.current.clientWidth) * audioRef.current.duration;
            audioRef.current.currentTime = seekTime;
        } else {
            console.error("audioRef.current or seekbg.current is undefined");
        }
    }

    useEffect(()=>{
        audioRef.current.ontimeupdate=()=>{
            seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)+"%");
            setTime({
                currentTime:{
                    seconds:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    seconds:Math.floor(audioRef.current.duration%60),
                    minute:Math.floor(audioRef.current.duration/60)
                }
            })
        }
    },[audioRef])



    const contextValue={
audioRef,
seekBar,
seekbg,
track,
setTrack,
playStatus,setPlayStatus,
time,setTime,play,pause,
playWithId,previous,next,seekSong
    }
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;