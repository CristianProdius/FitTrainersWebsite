import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BeforeAfter = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1240px] mx-auto py-12">
      <h1 className="px-4 pt-12 pb-8 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
        {t("Here are the result Before and after:")}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./3.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <div className="h-auto max-w-full rounded-lg bg-[#383838] py-8 px-4">
              <h1
                className="mb-12 text-2xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-white
               uppercase w-full"
              >
                {t("You decide your future")}
              </h1>
              <Link
                to="/join"
                className=" text-background bg-gradient-to-r from-[#8dff96] to-main hover:text-main hover:from-background hover:to-black  font-medium rounded-[30px] text-xl px-8 py-2 text-center whitespace-nowrap "
              >
                {t("Join Now")}
              </Link>
            </div>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="./5.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./2.jpg" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./3.jpg" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./2.jpg" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./4.jpg" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./5.jpg" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="./3.jpg" />
          </div>
          <div>
            <div className="h-auto max-w-full rounded-lg bg-main py-8 px-4">
              <h1
                className="mb-6 text-2xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl text-background
               uppercase w-full"
              >
                {t("You are in control of your life")}
              </h1>
              <Link
                to="/join"
                className="text-background bg-white  hover:text-background hover:bg-gradient-to-r hover:from-[#8dff96] hover:to-main  font-medium rounded-[30px] text-xl px-5 py-2.5 text-center mt-4 whitespace-nowrap "
              >
                {t("Join Now")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
