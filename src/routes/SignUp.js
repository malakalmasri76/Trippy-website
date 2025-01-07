import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";
import Hero from "../components/Hero";
import SignUpImg from "../Assests/9.jpg";
function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={SignUpImg}
        btnClass="hide"
      />
      <SignUpForm/>
      <Footer/>
    </>
  );
}
export default SignUp;