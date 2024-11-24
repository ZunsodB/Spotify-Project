import Sidebar from "../Layouts/Sidebar";
import Display from "../Layouts/Display";
import Header from "../Layouts/Header";
import MusicPlayer from "../Layouts/MusicPlayer";

export default function App() {
  return (
    <div className="h-screen bg-black flex flex-col">
      <header className="h-[9%] w-full bg-black">
        <Header />
      </header>
      <main className="flex flex-row flex-1 gap-2 p-2">
        <aside className="flex bg-[#181818] rounded-lg w-[25%]">
          <Sidebar />
        </aside>
        <section className="flex-1 bg-[#181818] rounded-lg">
          <Display />
        </section>
      </main>
      <footer className="h-[10%] w-full bg-black">
        <MusicPlayer />
      </footer>
    </div>
  );
}
