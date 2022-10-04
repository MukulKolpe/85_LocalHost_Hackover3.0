import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import Organizer from "./pages/Organizer/Organizer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
