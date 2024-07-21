import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type WorkoutType = "fat" | "muscle" | "powerlift";

const workoutOptions: Record<WorkoutType, { text: string; image: string }> = {
  fat: { text: "Lose Weight", image: "/fatThumb.jpg" },
  muscle: { text: "Build Muscle", image: "/buildThumb.jpg" },
  powerlift: { text: "Powerlifting", image: "/powerliftThumb.jpg" },
};

const Join = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType | "">("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const workoutFromQuery = queryParams.get("workout") as WorkoutType | null;

  useEffect(() => {
    if (workoutFromQuery) {
      setSelectedWorkout(workoutFromQuery);
    }
  }, [workoutFromQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-background ">
      <Header />
      <section className="py-24 mx-auto max-w-[1240px] bg-secondary rounded-[30px] my-16">
        <div className="grid gap-4 md:grid-cols-2 px-8">
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl font-bold text-center md:text-5xl text-white">
              Start Your jorney
            </h1>
            <p className="mt-6 text-lg text-center md:text-left md:text-xl text-white">
              All the traiing is done throuch our advande telegram bot. We need
              this to contact you and give you acces to the training program.
            </p>
            <form className="mt-12">
              <div className="flex flex-col  space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg"
                />
                <select
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg"
                  value={selectedWorkout}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedWorkout(e.target.value as WorkoutType | "")
                  }
                >
                  <option value="">Select workout type</option>
                  <option value="fat">Lose Weight</option>
                  <option value="muscle">Build Muscle</option>
                  <option value="powerlift">Powerlifting</option>
                </select>
                <button className="w-full md:w-44 px-4 py-2 mt-4 md:mt-0 bg-main text-white rounded-lg">
                  Join
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center mt-6 md:mt-0 gap-6">
            <div
              className="bg-cover bg-center  w-3/4 h-3/5 flex items-center justify-center text-white text-2xl md:text-5xl font-bold shadow-text px-4 py-12 rounded-[30px]"
              style={{
                backgroundImage: `url('${
                  (selectedWorkout && workoutOptions[selectedWorkout]?.image) ||
                  "/defaultThumb.jpg"
                }')`,
              }}
            >
              {(selectedWorkout && workoutOptions[selectedWorkout]?.text) ||
                "Your Workout"}
            </div>

            <div className="bg-[#383737]  w-3/4 h-2/5 flex items-center justify-center text-white text-2xl md:text-4xl font-bold shadow-text px-4 py-12 rounded-[30px]">
              <h1>
                You know what to do,{" "}
                <span className="text-main">3 2 1 GO!</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Join;
