import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  return (
    <div
      className="player-card"
      onClick={() => navigate(`/player/${player.id}`)}
    >
      <img src={player.photo} alt={player.name} />

      <div className="player-info">
        <h2>{player.name}</h2>

        <p>{player.positions.join(" • ")}</p>

        <span className="rating">
          ⭐ OVR {player.rating}
        </span>
      </div>
    </div>
  );
}

export default PlayerCard;