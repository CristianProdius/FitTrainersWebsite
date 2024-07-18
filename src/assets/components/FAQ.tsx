import { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";

export default function FAQ() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-[1240px] mx-auto py-20 px-4">
        <h1 className="px-4 pt-12 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white uppercase w-full mb-8">
          programs Faqs
        </h1>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}
