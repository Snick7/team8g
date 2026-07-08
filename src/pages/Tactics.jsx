import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Tactics.css";

import lineup from "../assets/tactics/lineup.jpg";
import bench from "../assets/tactics/bench.jpg";
import tactics from "../assets/tactics/tactics.jpg";

function Tactics() {
  const { t } = useTranslation();

  return (
    <div className="tacticsPage">
      <header className="tacticsHeader">
        <h1>⚽ {t("tacticsTitle")}</h1>

        <Link to="/" className="backBtn">
          ← {t("backHome")}
        </Link>
      </header>

      <div className="topSection">
        <div className="card">
          <h2>{t("mainLineup")}</h2>

          <img
            src={lineup}
            alt={t("mainLineup")}
            className="tacticsImage"
          />
        </div>

        <div className="card">
          <h2>{t("bench")}</h2>

          <img
            src={bench}
            alt={t("bench")}
            className="tacticsImage"
          />
        </div>
      </div>

      <div className="card bottomCard">
        <h2>{t("tacticalScheme")}</h2>

        <img
          src={tactics}
          alt={t("tacticalScheme")}
          className="tacticsImageLarge"
        />
      </div>
    </div>
  );
}

export default Tactics;