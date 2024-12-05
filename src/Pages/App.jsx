import Sidebar from "../Layouts/Sidebar";
import Display from "../Layouts/Display";
import Header from "../Layouts/Header";
import MusicPlayer from "../Layouts/MusicPlayer";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function App() {

  const{audioRef,track}=useContext(PlayerContext);
  return (
    <div className="h-screen bg-black flex flex-col font-sans">
      <header className="h-[57px] w-full bg-black sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex flex-row flex-1 gap-2 p-2 overflow-hidden">
        <aside className="flex bg-[rgba(18,18,18)] rounded-lg w-[24vw] sticky top-[57px] h-[calc(100vh-137px)]">
          <Sidebar />
        </aside>
        
        <section className="flex-1 bg-[rgba(18,18,18)] rounded-lg overflow-y-auto h-[calc(100vh-137px)]">
          <Display />
        </section>
      </main>
      <footer className="h-[80px] w-full bg-black sticky bottom-0 z-50">
        <MusicPlayer />
        {track ? (
          <audio ref={audioRef} src={track.file} preload="auto"></audio>
        ) : (
          <div className="text-white text-center">No track available</div>
        )}
      </footer>
    </div>
  );
}