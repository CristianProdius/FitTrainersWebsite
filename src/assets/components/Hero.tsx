import { MdOutlineDiscount } from "react-icons/md";
import PromoTab from "./PromoTab";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className=" md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 pt-10">
          <div className="text-center md:text-left">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
              {t("I'll build you a dream body")}{" "}
              <span className="text-[#646262]">
                {t("in a short time and without rollback")}
              </span>
            </h1>
            <div className="flex items-center justify-center md:justify-start">
              <Link
                to="programs"
                spy={true}
                smooth={true}
                className="inline-flex items-center justify-center text-xl px-1 sm:px-2 py-2 md:px-5 md:py-3 mr-3 font-bold text-center text-background rounded-lg md:text-2xl bg-main"
              >
                {t("Select a Program")}
              </Link>
              <p className="inline-flex items-center justify-center text-l px-1 sm:px-2 py-2 md:px-5 md:py-3 text-base font-medium text-center md:text-2xl text-white">
                {t("And get a discount")}{" "}
                <MdOutlineDiscount className="ml-2 text-main" />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="ArteomHome.png"
              alt="main arteomn"
              className="transform scale-x-[-1] pt-7 mx-auto block"
            />
          </div>
        </div>
      </section>
      <PromoTab />
    </>
  );
};

export default Hero;
