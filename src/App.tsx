import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-slate-900 text-white font-sans min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <Intro />
        </div>
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
