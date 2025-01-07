import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../Assests/12.jpg";
import Des from "../components/Des";
import Trip from "../components/Trip";
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        Heroimg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Des />
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
