import { MdOutlineDiscount } from "react-icons/md";
import PromoTab from "./PromoTab";

const Hero = () => {
  return (
    <>
      <section className="bg-background">
        <div className=" md:flex md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 pt-10">
          <div className="">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
              I'll build you a dream body{" "}
              <span className="text-[#646262]">
                in a short time and without rollback
              </span>
            </h1>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 font-bold text-center text-background rounded-lg text-2xl bg-main"
            >
              Select a program
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white"
            >
              And get a discount{" "}
              <MdOutlineDiscount className="ml-2 text-main" />
            </a>
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
