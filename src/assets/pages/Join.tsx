import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type WorkoutType = "fat" | "muscle" | "powerlift";

const Join = () => {
  const { t } = useTranslation();

  const workoutOptions: Record<WorkoutType, { text: string; image: string }> = {
    fat: { text: t("Lose Weight"), image: "/fatThumb.jpg" },
    muscle: { text: t("Build Muscle"), image: "/buildThumb.jpg" },
    powerlift: { text: t("Powerlifting"), image: "/powerliftThumb.jpg" },
  };

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

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const botToken = import.meta.env.VITE_BOT_TOKEN;
    const chatId = import.meta.env.VITE_CHAT_ID;
    const chatId2 = import.meta.env.VITE_CHAT_ID2;
    const text = `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nNotes: ${notes}\nSelected Workout: ${selectedWorkout}`;

    await Promise.all([
      fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
          text
        )}`
      ),
      fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId2}&text=${encodeURIComponent(
          text
        )}`
      ),
    ]);

    setIsSubmitted(true);
    // Clear the form
    setName("");
    setUsername("");
    setEmail("");
    setNotes("");
    setSelectedWorkout("");
  };

  return (
    <div className="bg-background ">
      {isSubmitted && (
        <div
          id="toast-success"
          className="mx-auto flex items-center w-full max-w-xs p-4 mb-4  z-10  rounded-lg shadow text-gray-400 bg-white"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg bg-green-800 text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check </span>
          </div>
          <div className="ms-3 text-sm font-normal">
            {t("Your request has been submitted successfully!")}
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-[#578a1c] bg-gray-800 hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => setIsSubmitted(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
      <Header />
      <section className="py-24 mx-auto max-w-[1240px] bg-secondary rounded-[30px] my-16">
        <div className="grid gap-4 md:grid-cols-2 px-8">
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="text-4xl font-bold text-center md:text-5xl text-white">
              {t("Start Your Journey")}
            </h1>
            <p className="mt-6 text-lg text-center md:text-left md:text-xl text-white">
              {t(
                "All the training is done through our advanced telegram bot. We need this to contact you and give you access to the training program."
              )}
            </p>
            <form className="mt-12" onSubmit={handleSubmit}>
              <div className="flex flex-col  space-y-4">
                <input
                  type="text"
                  placeholder={t("Your name")}
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder={t("Telgram username")}
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder={t("Your email")}
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder={t("Tell us more about you")}
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg "
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <select
                  className="w-full md:w-96 px-4 py-2 mt-4 md:mt-0 md:mr-4 rounded-lg"
                  value={selectedWorkout}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedWorkout(e.target.value as WorkoutType | "")
                  }
                >
                  <option value="">{t("Select workout type")}</option>
                  <option value="fat">{t("Lose Weight")}</option>
                  <option value="muscle">{t("Build Muscle")}</option>
                  <option value="powerlift">{t("Powerlifting")}</option>
                </select>
                <button className="w-full md:w-44 px-4 py-2 mt-4 md:mt-0 bg-main text-white rounded-lg hover:bg-[#257012] transition-colors duration-200">
                  {t("Join")}
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
                t("Your Workout")}
            </div>

            <div className="bg-[#383737]  w-3/4 h-2/5 flex items-center justify-center text-white text-2xl md:text-4xl font-bold shadow-text px-4 py-12 rounded-[30px]">
              <h1>
                {t("You know what to do,")}{" "}
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
