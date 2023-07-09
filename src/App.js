import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
//import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Github from "./Components/Github";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Techstack from "./Components/TechStack";
// import Techstack from "./Components/TechStack";

const App = () => {
  return (
    <>
      <Navbar  id="nav-menu" />
      <Home id="home" />
      <About id="about" class="about section" />
      <Education />
      <Projects id="projects"  />
      <Techstack  />
      <Github />
      
      <Contact  id="contact"/>

      <Footer />
    </>
  );
}

export default App;