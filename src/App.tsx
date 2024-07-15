import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import ProgramMen from "./assets/pages/ProgramMen";
import ProgramFull from "./assets/pages/ProgramFull";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/men_program" element={<ProgramMen />} />
        <Route path="/full_program" element={<ProgramFull />} />
      </Routes>
    </Router>
  );
}

export default App;
