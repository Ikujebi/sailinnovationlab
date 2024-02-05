import { FC } from "react";
import arrow from "../images/arrow1-removebg-preview.png";
import { Link } from "react-router-dom";

const AboutUsNav: FC = () => {
    const pik1 =
      "https://sailab.ng/wp-content/uploads/2023/10/Frame-18891-2-1-1-1024x234.png";
  
    const pik2 =
      "https://sailab.ng/wp-content/uploads/2023/10/Image-5-1-1024x742.png";
    const pik3 =
      "https://sailab.ng/wp-content/uploads/2023/10/Image-5-2-1024x694.png";
  
      const logo = "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004122.png"
  
      const pik4 = "https://sailab.ng/wp-content/uploads/2023/10/Image-5-3.png"
  return (
    <div className="flex flex-col text-gray-800">
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
          <img src={pik1} alt="" className="2xl:w-[63%]" />
        </section>
        <div className="2xl:w-[100rem] mx-auto mt-[5rem]">
          <section className="flex justify-center mx-auto md:mx-5 mt-[4rem] gap-3 lg:mx-[3rem] 2xl:mx-[15rem]">
            <article>
              <h2 className="font-bold text-[2.4rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                At SAIL Innovation Lab, our commitment runs deep.
              </h2>
              <p>
                We’re on a mission to transform youth development and ignite
                economic prosperity in the Lagos East Senatorial District. In
                partnership with Co-Creation Hub, we’ve created a vibrant
                community Innovation space dedicated to nurturing the young
                talents of Lagos East.
              </p>
            </article>
            <article className="md:w-[100rem]">
              <img src={pik2} alt="" className="" />
            </article>
          </section>
          <section className="flex justify-center mx-auto md:mx-5 mt-[4rem] gap-3 lg:mx-[3rem] 2xl:mx-[15rem]">
            <article className="md:w-[100rem]">
              <img src={pik3} alt="" className="" />
            </article>
            <article className="text-[1.06rem]">
              <h2 className="font-bold text-[2.4rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                Our Aim
              </h2>
              <p>
                SAIL’s aim is clear: to forge pathways to employment, spark
                grassroots innovation, foster partnerships and networks that
                drive economic growth and collaboratively tackle significant
                social and business challenges within the Lagos East Senatorial
                District.
              </p>

              <p className="mt-[2.9rem]">
                Within our space, we’ve cultivated an environment that feels
                like a second home – one that’s comfortable, safe, and brimming
                with opportunities for young people to thrive.
              </p>
            </article>
          </section>
        </div>
        <section style={{ backgroundImage: `url(${pik4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  className='mt-[3rem] h-[65svh]'>
    <div className="flex justify-end mr-[8rem] ">
    <img src={logo} alt=""  className="w-[6rem] mt-[-2.7rem]"/>
    </div>
    <article className="text-white mt-[10rem] text-[1.08rem]">
      <h2 className="flex justify-center text-[2rem] font-bold">
      Discover More
      </h2>
      <p className="flex justify-center">Explore the diverse programs and initiatives that make up SAIL Innovation</p>
      <p className="flex justify-center">Lab. Click below to learn more about how we’re shaping the future.</p>
      <div className="flex justify-center">
      <Link to={"/programNav"} className="w-[40%] text-black flex justify-center font-semibold  bg-[#ffcc4c]  p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white">
              OUR PROGRAMS{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.4rem] w-4 h-3"
              />
            </Link>
      </div>
    </article>
          
        </section>
      </main>
      </div>
  )
}

export default AboutUsNav