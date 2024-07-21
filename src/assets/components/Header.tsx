import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const { t } = useTranslation();
  const menuItems = [
    { name: t("Home"), path: "/home" },
    { name: t("Features"), path: "/home#features" },
    { name: t("Programs"), path: "/home#programs" },
    { name: t("Results"), path: "/home#results" },
  ];
  const listItemClasses = "cursor-pointer hover:text-main";

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <RouterLink to="/">
        <img src="/Logo.png" alt="Logo" className="h-12 lg:h-14" />
      </RouterLink>

      <ul className="hidden lg:flex list-none text-white bg-secondary rounded-[20px] space-x-6 py-4 px-12 text-2xl">
        {menuItems.map((item) => (
          <li key={item.name} className={listItemClasses}>
            <RouterLink to={`/#${item.name.toLowerCase()}`}>
              {item.name}
            </RouterLink>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <LanguageSelector />
      </div>
      <div onClick={handleNav} className=" lg:hidden">
        {!nav ? (
          <AiOutlineClose size={32} className="text-white" />
        ) : (
          <AiOutlineMenu size={32} className="text-white" />
        )}
      </div>
      <div
        className={
          nav ? "hidden" : "absolute top-24 left-0 w-full  bg-background z-10"
        }
      >
        <ul className="flex flex-col list-none text-white bg-background space-y-6 py-4 px-12 text-xl items-center">
          {menuItems.map((item) => (
            <li key={item.name} className={listItemClasses}>
              <Link to={item.name.toLowerCase()} spy={true} smooth={true}>
                {item.name}
              </Link>
            </li>
          ))}
          <LanguageSelector />
        </ul>
      </div>
    </div>
  );
};

export default Header;
