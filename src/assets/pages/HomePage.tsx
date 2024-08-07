import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location]);
  return (
    <div className=" bg-background ">
      <Header />

      <Hero />

      <div id="features">
        <Features />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="results">
        <BeforeAfter />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div className="bg-main max-w-[1240px] py-8 text-center mx-auto flex flex-col items-center justify-center rounded-[30px] mb-12">
        <h1 className="mb-8 px-2 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl uppercase ">
          {t("Are you ready to change your life?")}
        </h1>
        <Link
          to={"/join"}
          className="text-white bg-[#2b2b2b] hover:text-main hover:bg-secondary font-bold rounded-lg text-xl px-12 py-5 text-center"
        >
          {t("Join Now")}
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
