import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/sections/Footer";
import Portfolio from "./pages/Portfolio";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ErrorPage from "./pages/ErrorPage";

import "./styles/global.css";
import { caseStudies as studies } from "./data/caseStudies.js";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio studies={studies} />} />
            <Route
              path="/case-study/:id"
              element={<CaseStudyDetail studies={studies} />}
            />
            <Route path="/500" element={<ErrorPage code={500} />} />
            <Route path="*" element={<ErrorPage code={404} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
