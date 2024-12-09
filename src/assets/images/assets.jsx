import loop_icon from "./images/loop.png"; 
import play_icon from "./images/play.png"; 
import prev_icon from "./images/prev.png"; 
import shuffle_icon from "./images/shuffle.png"; 
import next_icon from "./images/next.png"; 

import img1 from "./images/img-1.png"; 
import song1 from "./songs/song-1.mp3"; 

export const assets= {
    loop_icon,
    play_icon,
    prev_icon,
    shuffle_icon,
    next_icon
};

export const songsData = [
    {
        id:0,
        name: "Die For You", 
        image: img1, 
        file:song1, 
        desc:"Joji" , 
        duration: "3:00"
    },
    {
        id:0,
        name: "Bunny Girl", 
        image: img1,
        file:song1, 
        desc:"Dukiin hairt duu " , 
        duration: "3:00"
    },
]