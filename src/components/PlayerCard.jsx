import "./PlayerCard.css";
import { useNavigate } from "react-router-dom";

function PlayerCard({ player }) {
  const navigate = useNavigate();

  // ID игрока
  const id = String(player.id);

  // =========================
  // ТИП КАРТОЧКИ
  // =========================

  let cardClass = "player-card";
  let role = "Игрок Team 8G";

  // Руслан — капитан
  if (id === "1") {
    cardClass += " captain-card";
    role = "Капитан";
  }

  // Ерболат — плеймейкер
  else if (id === "3") {
    cardClass += " playmaker-card";
    role = "Плеймейкер";
  }

  // Нурислам — техничный
  else if (id === "5") {
    cardClass += " technical-card";
    role = "Техничный игрок";
  }

  // Сержан — главный защитник
  else if (id === "4") {
    cardClass += " defender-card";
    role = "Главный защитник";
  }

  // Ерасыл — помощник защиты
  else if (id === "6") {
    cardClass += " defender-card";
    role = "Хороший помощник защиты";
  }

  // Кемел — нападающий вратарь
  else if (id === "7") {
    cardClass += " defender-card";
    role = "Нападающий вратарь";
  }

  // Ерсаин — опорник
  else if (id === "9") {
    cardClass += " defensive-card";
    role = "Опорник";
  }

  // Алихан — фланговый игрок
  else if (id === "8") {
    cardClass += " winger-card";
    role = "Фланговый игрок";
  }

  // =========================
  // БЕЙДЖ
  // =========================

  let badge = null;

  if (id === "1") {
    badge = (
      <div className="player-badge captain-badge">
        👑 КАПИТАН
      </div>
    );
  }

  if (id === "3") {
    badge = (
      <div className="player-badge playmaker-badge">
        🎯 ПЛЕЙМЕЙКЕР
      </div>
    );
  }

  if (id === "5") {
    badge = (
      <div className="player-badge technical-badge">
        ⚡ ТЕХНИЧНЫЙ
      </div>
    );
  }

  if (id === "4") {
    badge = (
      <div className="player-badge defensive-badge">
        🛡️ ЗАЩИТНИК
      </div>
    );
  }

  if (id === "6") {
    badge = (
      <div className="player-badge defensive-badge">
        🛡️ ЗАЩИТА
      </div>
    );
  }

  if (id === "7") {
    badge = (
      <div className="player-badge defensive-badge">
        🧤 ВРАТАРЬ
      </div>
    );
  }

  if (id === "9") {
    badge = (
      <div className="player-badge defensive-badge">
        🛡️ ОПОРНИК
      </div>
    );
  }

  if (id === "8") {
    badge = (
      <div className="player-badge winger-badge">
        ⚡ ФЛАНГ
      </div>
    );
  }

  // =========================
  // КАРТОЧКА
  // =========================

  return (
    <div
      className={cardClass}
      onClick={() => navigate(`/player/${player.id}`)}
    >

      {badge}

      {/* ФОТО */}

      <div className="player-photo">
        <img
          src={player.photo}
          alt={player.name}
        />
      </div>

      {/* ИНФОРМАЦИЯ */}

      <div className="player-info">

        <div className="player-top">

          <div>
            <h2>{player.name}</h2>

            <p className="player-position">
              {player.positions?.join(" • ") || "—"}
            </p>
          </div>

          <span className="player-number">
            #{player.number ?? "—"}
          </span>

        </div>


        {/* =========================
            FIFA ХАРАКТЕРИСТИКИ
        ========================= */}

        <div className="player-stats">

          <div className="player-stat">
            <span>PAC</span>
            <strong>{player.pace ?? "-"}</strong>
          </div>

          <div className="player-stat">
            <span>SHO</span>
            <strong>{player.shooting ?? "-"}</strong>
          </div>

          <div className="player-stat">
            <span>PAS</span>
            <strong>{player.passing ?? "-"}</strong>
          </div>

          <div className="player-stat">
            <span>DRI</span>
            <strong>{player.dribbling ?? "-"}</strong>
          </div>

          <div className="player-stat">
            <span>DEF</span>
            <strong>{player.defending ?? "-"}</strong>
          </div>

          <div className="player-stat">
            <span>PHY</span>
            <strong>{player.physical ?? "-"}</strong>
          </div>

        </div>


        {/* =========================
            НИЗ
        ========================= */}

        <div className="player-bottom">

          <div className="player-role">
            {role}
          </div>

          <div className="rating">
            ⭐ {player.rating ?? 0} OVR
          </div>

        </div>

      </div>

    </div>
  );
}

export default PlayerCard;