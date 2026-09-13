import BackgroundEffects from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import PortraitShowcase from "./components/PortraitShowcase";
import Gallery from "./components/Gallery";
import NotesGrid from "./components/NotesGrid";
import CakeInteraction from "./components/CakeInteraction";
import LetterModal from "./components/LetterModal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-[100svh] w-full overflow-x-hidden">
      <BackgroundEffects />

      <main className="relative z-10">
        <Hero />
        <Timeline />
        <PortraitShowcase />
        <Gallery />
        <NotesGrid />
        <CakeInteraction />
        <LetterModal />
        <Footer />
      </main>
    </div>
  );
}

export default App;
