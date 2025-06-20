import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About Me";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />      
      <Footer />

    </>
  );
}

export default App;
