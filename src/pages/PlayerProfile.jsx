import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import players from "../data/players";
import "./PlayerProfile.css";

function PlayerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const player = players.find((p) => p.id === Number(id));

  if (!player) {
    return <h2>{t("playerNotFound")}</h2>;
  }

  const Stat = ({ name, value }) => (
    <div className="stat">
      <div className="statTop">
        <span>{name}</span>
        <span>{value}</span>
      </div>

      <div className="bar">
        <div
          className="fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="profilePage">

      <button className="backBtn" onClick={() => navigate("/")}>
        ← {t("back")}
      </button>

      <div className="profileCard">

        <div className="leftSide">

          <img
            src={player.photo}
            alt={player.name}
            className="profileImg"
          />

          <h1>{player.fullName || player.name}</h1>

          <h3>⭐ {player.rating} OVR</h3>

          <p>№ {player.number}</p>

          <p>{player.positions.join(" • ")}</p>

          <p>{player.age} {t("years")}</p>

        </div>

        <div className="rightSide">

          <h2>{t("attributes")}</h2>

          <Stat name={`⚡ ${t("pace")}`} value={player.pace} />
          <Stat name={`🎯 ${t("shooting")}`} value={player.shooting} />
          <Stat name={`🎮 ${t("passing")}`} value={player.passing} />
          <Stat name={`🪄 ${t("dribbling")}`} value={player.dribbling} />
          <Stat name={`🛡 ${t("defending")}`} value={player.defending} />
          

          <div className="info">

          <p>⚽ {t("goals")}: {player.goals}</p>
          <p>🅰 {t("assists")}: {player.assists}</p>
          <p>🎮 {t("matches")}: {player.matches}</p>  
            
            

          </div>

        </div>

      </div>

    </div>
  );
}

export default PlayerProfile;