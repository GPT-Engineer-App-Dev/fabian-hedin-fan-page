import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import FabianHedin from "./pages/FabianHedin.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/fabian-hedin" element={<FabianHedin />} />
      </Routes>
    </Router>
  );
}

export default App;