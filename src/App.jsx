import './App.css';
import Navbar from './common/Navbar';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Experience from './sections/Experience/Experience';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Blogs from './sections/Blogs/Blogs';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Blogs />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
