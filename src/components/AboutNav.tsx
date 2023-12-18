import { FC } from "react";


const AboutNav: FC = () => {
  const pik1 =
    "https://sailab.ng/wp-content/uploads/2023/10/Frame-18891-2-1-1-1024x234.png";

    const pik2 = "https://sailab.ng/wp-content/uploads/2023/10/Image-5-1-1024x742.png"
  return (
    <div className="flex flex-col rubik">
      <header className="mt-[3rem]  text-gray-700 font-semibold rounded-xl py-1 px-4 flex justify-center flex-col  ">
        <h1 className="bg-[#ffcc4c] px-5 rounded-xl text-[.9rem] flex justify-center w-[8rem] mx-auto">
          ABOUT US
        </h1>
        <h2 className="font-bold flex justify-center mt-[3rem] text-[2.5rem]">
          Who We Are
        </h2>
      </header>
      <main>
        <section className=" md:mx-5 mx-9 flex justify-center">
          <img src={pik1} alt="" />
        </section>
        <div className="2xl:w-[100rem] mx-auto">
        <section className="flex justify-center mx-auto md:mx-5 mt-[4rem] ">
          <article>
            <h2>At SAIL Innovation Lab, our commitment runs deep.</h2>
            <p>
              We’re on a mission to transform youth development and ignite
              economic prosperity in the Lagos East Senatorial District. In
              partnership with Co-Creation Hub, we’ve created a vibrant
              community Innovation space dedicated to nurturing the young
              talents of Lagos East.
            </p>
          </article>
          <article className="md:w-[100rem]">
            <img src={pik2} alt="" className=""/>
            
          </article>
        </section>
        </div>
      </main>
    </div>
  );
};

export default AboutNav;
