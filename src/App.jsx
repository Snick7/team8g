import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Statistics from "./pages/Statistics";
import Achievements from "./pages/Achievements";
import Tactics from "./pages/Tactics";

import Login from "./pages/Login";
import Register from "./pages/Register";

import PlayerProfile from "./pages/PlayerProfile";

function App() {
  return (
    <Routes>
      {/* Главная */}
      <Route path="/" element={<Home />} />

      {/* Команда */}
      <Route path="/matches" element={<Matches />} />
      <Route path="/tactics" element={<Tactics />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/achievements" element={<Achievements />} />

      {/* Игрок */}
      <Route
        path="/player/:id"
        element={<PlayerProfile />}
      />

      {/* Авторизация */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;