import { FC } from "react";
import "../App.css";
import FooterIcons from "./FooterIcons";
const Footer: FC = () => {
  return (
    <div className="h-[60svh]  bg-[#383434] rubik pt-[3rem]  md:px-6 ">
      <section className="flex justify-center gap-[2rem] md:gap-[5rem]  xl:gap-[15rem] 2xl:gap-[15rem]">
        <article className="text-white  ">
          <div className="text-white flex ">
            <h2 className=" text-[2rem] font-bold xl:text-[3rem] 2xl:text-[2.5rem] 2xl:font-semibold">
              Join Us
            </h2>
            <span className=" text-white text-[4rem] ml-5 flex justify-center items-center material-symbols-outlined text-white mt-[-.4rem]">
              {" "}
              arrow_right_alt
            </span>
          </div>
          <p>SAIL Innovation Lab</p>
          <p>No. 1, Muba Abiru Street, Ebute,</p>
          <p>Ikorodu, Lagos.</p>
          <div className="mt-[5rem]">
            <FooterIcons />
          </div>
        </article>
        <article>
          <div>
            <form action="" className="flex gap-[1rem]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#FFFFFF33] w-[17rem] h-[3.5rem] text-[#808285] pl-1 border-none outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-[#FFFFFF33] w-[17rem] h-[3.5rem] text-[#808285] pl-1 border-none outline-none"
              />
            </form>
            <button className="flex text-white border-[1px] mt-5 p-3 rounded-xl">
              SUBMIT{" "}
              <span className="pb-2 text-white w-[2rem] ml-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white">
                {" "}
                arrow_right_alt
              </span>
            </button>
          </div>
        </article>
      </section>
      <section className="flex flex-col justify-center md:mt-[2rem] text-white">
        <div className="flex justify-center">
          <div className="h-[.06rem] w-[55rem] xl:w-[65rem] 2xl:w-[65rem] bg-white flex justify-center"></div>
        </div>
        <article className="flex pt-[1rem] justify-between mx-[1.67rem] xl:mx-[5rem] 2xl:mx-[15rem]">
          <header>2023 ©️ All Rights Reserved</header>
          <nav className="flex list-none gap-[1rem]">
            <li>About us</li>
            <li>Our Programs</li>
            <li>Blog</li>
          </nav>
        </article>
      </section>
    </div>
  );
};

export default Footer;
// #808285
