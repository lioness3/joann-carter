import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Hero />

        <Header content={"Projects"} />
        <Projects />

        <Header content={"About"} />
        <About />

        <Header content={"Contact"} />
        <Footer />
      </div>
    </>
  );
}

export default App;
