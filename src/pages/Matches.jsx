import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Matches() {
  const { t } = useTranslation();

  return (
    <div className="page">

      <div className="pageHeader">
        <Link to="/" className="backBtn">
          ← {t("backHome")}
        </Link>
      </div>

      <h1>⚽ {t("matches")}</h1>

      <p>Здесь будут отображаться все матчи Team 7G.</p>

    </div>
  );
}

export default Matches;