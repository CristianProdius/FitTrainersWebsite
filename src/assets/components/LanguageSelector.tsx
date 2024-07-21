import React, { useState } from "react";
import i18n from "../i18n/i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  return (
    <select
      defaultValue={selectedLanguage}
      onChange={chooseLanguage}
      className="py-4 px-12  font-bold text-white bg-secondary rounded-[20px] hover:text-background hover:bg-gradient-to-r hover:from-[#53980E] hover:to-main "
    >
      <option value="en">English</option>
      <option value="ro">Romanian</option>
      <option value="ru">Russian</option>
    </select>
  );
};

export default LanguageSelector;
