import { FC } from "react";
import Footer from "../components/Footer";
import AboutUsNav from "../components/AboutUsNav";
import HeaderNav from "../components/HeaderNav";


const AboutNav: FC = () => {
  

  return (
    <div className=" karla">
      <HeaderNav margin/>
      <AboutUsNav />
      <Footer />
    </div>
  );
};

export default AboutNav;
