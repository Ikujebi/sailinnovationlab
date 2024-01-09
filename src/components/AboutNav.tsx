import { FC } from "react";
import Footer from "./Footer";
import AboutUsNav from "./AboutUsNav";
import HeaderNav from "./HeaderNav";


const AboutNav: FC = () => {
  

  return (
    <div className=" karla">
      <HeaderNav />
      <AboutUsNav />
      <Footer />
    </div>
  );
};

export default AboutNav;
