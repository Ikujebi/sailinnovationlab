import { FC } from "react";
import Footer from "./Footer";
import AboutUsNav from "./AboutUsNav";
import { Link } from "react-router-dom";

const AboutNav: FC = () => {
  const headerpix =
    "https://sailab.ng/wp-content/uploads/2023/10/cropped-SAIL-Logo-228x67-1.png";

  return (
    <div className=" karla">
      <div className="flex mx-[1rem] xl:mx-[2rem] 2xl:mx-[15rem] mt-[2rem]">
        <header>
          <img src={headerpix} alt="" className="w-[16rem]"/>
        </header>
        <nav className="mt-[1rem] w-[100%] flex gap-2 mr-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 justify-end md:font-normal lg:font-normal xl:font-normal 2xl:font-normal font-bold md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
         <Link to={"/aboutNav"}> <p className=" ">About Us</p></Link>
          <p>Our Programs</p>
          <p>Blog</p>
          <Link to={"/guest"}>
            <p>Visit</p>
          </Link>
        </nav>
      </div>
      <AboutUsNav />
      <Footer />
    </div>
  );
};

export default AboutNav;
