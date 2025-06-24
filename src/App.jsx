import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About Me";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Projects from "./components/Project";
import Education from "./components/Eductaion";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
