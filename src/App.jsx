import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
function App() {
  return (
    <>
      <div className=""></div>
      <div className="App">
        <div className="scroll-section">
          <Hero />
        </div>
        <div className="scroll-section">
          <Header content={"Projects"} />
          <Projects />
        </div>
        <div className="scroll-section">
          <Header content={"About"} />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
