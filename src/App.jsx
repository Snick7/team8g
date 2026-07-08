import Tactics from "./pages/Tactics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Statistics from "./pages/Statistics";
import Achievements from "./pages/Achievements";
import PlayerProfile from "./pages/PlayerProfile";

function App() {
  return (
    <Routes>
      <Route path="/tactics" element={<Tactics />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/player/:id" element={<PlayerProfile />} />
    </Routes>
  );
}

export default App;