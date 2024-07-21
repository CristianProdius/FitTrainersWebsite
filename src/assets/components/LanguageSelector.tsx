import { useState } from "react";
import i18n from "../i18n/i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  const chooseLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="py-4 px-12  font-bold text-white bg-secondary rounded-[20px] hover:text-background hover:bg-gradient-to-r hover:from-[#53980E] hover:to-main "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-white ring-opacity-5">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:text-main"
              role="menuitem"
              onClick={() => chooseLanguage("en")}
            >
              English
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:text-main"
              role="menuitem"
              onClick={() => chooseLanguage("ro")}
            >
              Romanian
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:text-main"
              role="menuitem"
              onClick={() => chooseLanguage("ru")}
            >
              Russian
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
