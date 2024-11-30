import Sidebar from "../Layouts/Sidebar";
import Display from "../Layouts/Display";
import Header from "../Layouts/Header";
import MusicPlayer from "../Layouts/MusicPlayer";

export default function App() {
  return (
    <div className="h-screen bg-black flex flex-col font-sans">
      <header className="h-[9vh] w-full bg-black">
        <Header />
      </header>
      <main className="flex flex-row flex-1 gap-2 px-2">
        <aside className="flex bg-[rgba(18,18,18)] rounded-lg w-[24vw]">
          <Sidebar />
        </aside>
        <section className="flex-1 bg-[rgba(18,18,18)] rounded-lg">
          <Display />
        </section>
      </main>
      <footer className="h-[80px] w-full bg-black">
        <MusicPlayer />
      </footer>
    </div>
  );
}
