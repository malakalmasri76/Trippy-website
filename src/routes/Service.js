import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../Assests/10.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={ServiceImg}
        title="Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  );
}
export default Service;
