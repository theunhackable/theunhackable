import './App.css';
import { About, Contact, Footer, Hero, Navbar, Projects, Skills } from './components';
import BG from './components/bg/BG';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BG/>
    </>
  );
}

export default App;
