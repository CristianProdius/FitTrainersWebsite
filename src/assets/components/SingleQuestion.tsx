import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 rounded-lg bg-[#222]">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer text-white text-l lg:text-xl font-bold"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg className="text-main" />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus className="text-main" />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={`${
            showAnswer && " border-t border-gray-400 p-4 lg:p-6 text-white"
          }`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}
