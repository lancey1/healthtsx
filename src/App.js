import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisclaimerOne from "./pages/DisclaimerOne";
import DisclaimerTwo from "./pages/DisclaimerTwo";
import Terms from "./pages/Terms";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [disclaimerPage, setDisclaimerPage] = useState(1);

  const handleDisclaimerChange = () => {
    if (disclaimerPage === 1) {
      setDisclaimerPage(2);
    } else {
      setAccepted(true);
    }
  };

  return (
    <div className="App">
      {/* If Disclaimers aren't accepted user is redirected to Disclaimer Page, User cannot enter "/*" while not accepted, they can view terms however */}
      {!accepted && (
        <Routes>
          <Route
            path="/"
            element={
              disclaimerPage === 1 ? (
                <DisclaimerOne onAccept={handleDisclaimerChange} />
              ) : (
                <DisclaimerTwo onAccept={handleDisclaimerChange} />
              )
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {/* Once accepted User can access website */}
      {accepted && (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;