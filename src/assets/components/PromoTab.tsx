import { FaFire } from "react-icons/fa6";

const PromoTab = () => {
  return (
    <div className="bg-secondary rounded-[40px]  md:flex md:flex-row justify-between  max-w-[1240px] mx-auto px-4 pt-8 shadow-top">
      <div className=" text-white md:w-[30%] py-3 ml-5">
        {" "}
        <h1 className="flex flex-wrap mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl uppercase">
          Modern Personal Account
        </h1>
        <ul className="text-xl md:text-2xl space-y-4">
          <li>Explanatory program</li>
          <li>Detailed videous</li>
          <li className="flex items-center">
            <span className="mr-2 text-main">
              <FaFire />
            </span>
            Training diary
          </li>
        </ul>
      </div>
      <div className="md:w-[40%] flex items-center justify-center py-10 md:py-0">
        <img
          src="./PromoFeutures.png"
          alt="the promo image"
          className="mx-auto hidden md:block md:mx-0"
        />
        <img
          src="./PromoFeuturesMobile.png"
          alt="the promo image for mobile"
          className="mx-auto block md:hidden"
        />
      </div>
      <div className="py-3 mr-5 text-white md:w-[30%] text-right">
        {" "}
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl uppercase">
          Regular Feedback
        </h1>
        <ul className="text-xl md:text-2xl space-y-4">
          <li className="flex items-center justify-end">
            <span className="mr-2 text-main">
              <FaFire />
            </span>
            I personally answer questions
          </li>
          <li>Process discussion</li>
          <li>Live chat</li>
        </ul>
      </div>
    </div>
  );
};

export default PromoTab;
