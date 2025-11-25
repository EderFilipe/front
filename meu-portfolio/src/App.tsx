import "./App.css";
import Header from "./components/Header";
import About from "./components/Sections/About/About";
import { ProjectList } from "./components/Sections/Projects";
import { Experience } from "./components/Sections/Experience";
import { Contact } from "./components/Sections/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <ProjectList />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
