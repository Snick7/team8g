import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  const isCaptain = player.id === 1;

  return (
    <div
      className={`player-card ${isCaptain ? "captain-card" : ""}`}
      onClick={() => navigate(`/player/${player.id}`)}
    >
      {/* Статус капитана */}
      {isCaptain && (
        <div className="captain-badge">
          👑 КАПИТАН
        </div>
      )}

      {/* Фото */}
      <div className="player-photo">
        <img src={player.photo} alt={player.name} />
      </div>

      {/* Информация */}
      <div className="player-info">

        <div className="player-top">
          <div>
            <h2>{player.name}</h2>

            <p className="player-position">
              {player.positions.join(" • ")}
            </p>
          </div>

          {player.number && (
            <span className="player-number">
              #{player.number}
            </span>
          )}
        </div>

        <div className="player-bottom">

          <div className="player-role">
            {isCaptain ? "Капитан команды" : "Игрок Team 8G"}
          </div>

          <span className="rating">
            ⭐ {player.rating} OVR
          </span>

        </div>

      </div>
    </div>
  );
}

export default PlayerCard;