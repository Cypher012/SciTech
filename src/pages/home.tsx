import About from "../components/section/home/about";
import Contact from "../components/section/home/contact.tsx";
import ExhibitSection from "../components/section/home/exhibit";
import Hero from "../components/section/home/hero";
import Jumbotron from "../components/section/home/jumbotron.tsx";
import Team from "../components/section/home/team.tsx";
const Home = () => {
  return (
    <main className="font-inter">
      <Hero />
      <About />
      <Team />
      <ExhibitSection />
      <Jumbotron />
      <Contact />
    </main>
  );
};

export default Home;
