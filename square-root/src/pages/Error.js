import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();
  return (
    <Banner title={t("error_page.title")}>
      <Link to="/" className="errorbutton">
        {t("error_page.return")}
      </Link>
    </Banner>
  );
}
