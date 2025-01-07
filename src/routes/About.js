import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assests/night.jpg";
import Footer from "../components/Footer";
import AboutYs from "../components/AboutYs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" Heroimg={AboutImg} title="About" btnClass="hide" />
      <AboutYs />
      <Footer />
    </>
  );
}
export default About;
