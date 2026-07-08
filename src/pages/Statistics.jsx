import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Statistics() {
  const { t } = useTranslation();

  return (
    <div className="page">

      <div className="pageHeader">
        <Link to="/" className="backBtn">
          ← {t("backHome")}
        </Link>
      </div>

      <h1>📊 {t("statistics")}</h1>

      <p>Здесь будет статистика игроков.</p>

    </div>
  );
}

export default Statistics;