import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./assets/pages/HomePage";
import Muscle from "./assets/pages/Muscle";
import Powerlift from "./assets/pages/Powerlift";
import Fat from "./assets/pages/Fat";
import Join from "./assets/pages/Join";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/muscle" element={<Muscle />} />
        <Route path="/powerlift" element={<Powerlift />} />
        <Route path="/fat" element={<Fat />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
