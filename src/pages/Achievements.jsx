import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Achievements() {
  const { t } = useTranslation();

  return (
    <div className="page">

      <div className="pageHeader">
        <Link to="/" className="backBtn">
          ← {t("backHome")}
        </Link>
      </div>

      <h1>🏆 {t("achievements")}</h1>

      <p>Здесь будут достижения команды и игроков.</p>

    </div>
  );
}

export default Achievements;