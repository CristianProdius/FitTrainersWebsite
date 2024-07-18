import ReactTypingEffect from "react-typing-effect";

const Features = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12 text-white ">
      <h1 className="max-w-2xl mx-auto text-center my-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase">
        We are the best at <br />
        <ReactTypingEffect
          text={["loosing fat", "diets", "building muscle"]}
          speed={100}
          eraseSpeed={100}
          typingDelay={1000}
          eraseDelay={2000}
          className="text-main"
        />
      </h1>

      <div className="grid grid-cols-1 gap-6 text-center pt-6 md:grid-cols-4 md:text-left ">
        <div className="flex flex-col justify-between bg-secondary rounded-[30px] py-4 px-4 h-full">
          <h1 className="text-xl font-extrabold tracking-tight leading-none xl:text-2xl uppercase">
            Personalized Programs
          </h1>
          <div className="py-6 ">
            <h1 className="inline-block bg-[#252525] px-6 py-2 rounded-[15px] m-2 shadow-md  font-bold text-l ">
              New Approach
            </h1>
            <h1 className="inline-block bg-main text-background px-6 py-2 rounded-[15px] shadow-md md:ml-16 font-bold ">
              New Results
            </h1>
          </div>
          <p className="text-xl">
            This training system is built on the basis of scientific research
            supported by practice.
          </p>
        </div>
        <div className="md:place-self-end bg-secondary rounded-[30px] py-4 px-4  md:h-3/4">
          <h1 className="my-4 text-xl  font-extrabold tracking-tight leading-none  xl:text-2xl uppercase">
            Load balance for any level
          </h1>
          <p className="text-xl pt-4">
            So as not to kill the motivation and desire to return to the gym
          </p>
        </div>
        <div className="md:place-self-end bg-secondary rounded-[30px] py-4 px-4 md:h-3/4">
          <h1 className="my-4 text-xl  font-extrabold tracking-tight leading-none  xl:text-2xl uppercase">
            No marketing time
          </h1>
          <p className="text-xl pt-4">
            Visible rersults already in the first months of training.
          </p>
        </div>
        <div className="relative flex items-start justify-center ">
          <video controls className="w-full h-auto rounded-[30px]">
            <source src="./FeaturesVideo.mp4#t=0.1" type="video/mp4" />
          </video>
          <p className="absolute m-4 pt-4 text-xl font-extrabold tracking-tight leading-none  xl:text-2xl uppercase">
            Clear Video instructions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
