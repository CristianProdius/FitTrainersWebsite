import BeforeAfter from "../components/BeforeAfter";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";

const HomePage = () => {
  return (
    <div className=" bg-background ">
      <Header />
      <Hero />
      <Features />
      <Programs />
      <BeforeAfter />
      <FAQ />
      <div className="bg-main max-w-[1240px] py-8 text-center mx-auto flex flex-col items-center justify-center rounded-[30px] mb-12">
        <h1 className="mb-8 px-2 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl uppercase ">
          Are you ready to change your life?
        </h1>
        <a
          href="#"
          className="text-white bg-[#2b2b2b] hover:text-main hover:bg-secondary font-bold rounded-lg text-xl px-12 py-5 text-center"
        >
          Join Now
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
