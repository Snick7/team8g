import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import players from "../data/players";
import PlayerCard from "../components/PlayerCard";

function Home() {
  const { t, i18n } = useTranslation();

  const playersRef = useRef(null);

  const changeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "kz" : "ru";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const scrollToPlayers = () => {
    playersRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>⚽ Team 8G</h1>
        </div>

        <nav className="menu">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            🏠 {t("home")}
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToPlayers();
            }}
          >
            👥 {t("players")}
          </a>

          <Link to="/matches">⚽ {t("matches")}</Link>
          <Link to="/tactics">🧠 {t("tactics")}</Link>
          <Link to="/statistics">📊 {t("statistics")}</Link>
          <Link to="/achievements">🏆 {t("achievements")}</Link>
        </nav>

        <div className="seasonInfo">
  📅 {t("seasonStart")}
</div>

        <button className="language" onClick={changeLanguage}>
          🌐 {i18n.language === "ru" ? "Қаз" : "Рус"}
        </button>
      </header>

      <section className="hero">
        <h1 className="heroTitle">⚽ TEAM 8G</h1>

        <h2 className="typing">
          {t("welcome")}
        </h2>

        <div
          className="scrollDown"
          onClick={scrollToPlayers}
          style={{ cursor: "pointer" }}
        >
          ↓
        </div>
      </section>

      <main ref={playersRef} className="players">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
