import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-slate-900 text-white font-sans min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Intro />
          <Experience />
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;