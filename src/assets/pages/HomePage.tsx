import Features from "../components/Features";
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
    </div>
  );
};

export default HomePage;
