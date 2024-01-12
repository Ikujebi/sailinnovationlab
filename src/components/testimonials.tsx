import { FC } from "react";
import grid from "../images/grid.png";
import play from "../images/Play.svg"
import { Link } from "react-router-dom";

const testimonials: FC = () => {

  const testimonialYoutubeLink = "https://youtu.be/axp9177Mdn0"

  const testimonial1 =
    "https://sailab.ng/wp-content/uploads/2023/10/rec-area-14.gif";
  
  return (
    <main className="h-[60svh] mt-[2rem]">
      <div className="flex justify-end">
        <img src={grid} alt="dfe" className="md:w-[13rem] lg:w-[13rem] xl::w-[20rem] 2xl:w-[20rem] w-[9rem] mr-[.5rem] md:mr-[1rem] lg:mr-[1rem] xl:mr-[13rem] 2xl:mr-[15rem] xl:mb-[-3rem] 2xl:mb-[-3rem]" />
      </div>
      
        <section id="" className=" flex justify-center ">
          <article className="z-2 relative w-[19rem] md:w-[45rem] lg:w-[45rem] xl:w-[60rem] 2xl:w-[62rem] h-[11.5rem] md:h-[20rem] lg:h-[20rem] xl::h-[26rem] 2xl:h-[28rem] rounded-2xl mb-[3rem] mt-[-6rem]">
          <div
        id="testimonial"
        className="flex justify-center z-3 relative w-[19rem] md:w-[45rem] lg:w-[45rem] xl:w-[60rem] 2xl:w-[62rem] h-[11.5rem] md:h-[23rem] lg:h-[20rem] xl::h-[26rem] 2xl:h-[28rem] rounded-2xl mb-[3rem] mt-[-6rem]"
        style={{
          background: `url(${testimonial1}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <article className="flex justify-center flex-col mx-auto">
          <header className=" rounded-2xl flex justify-center bg-[#48c4b4] text-white w-[10rem]">
            Testimonials
          </header>

          <main>
            <p>Lagos East Teachers'</p>
            <p>Fellowship Testimonial</p>
          </main>

          <Link to={testimonialYoutubeLink} className="mt-[2rem] flex justify-end mr-[-2rem] md:mr-[-8rem] xl:mr-[-20rem] 2xl:mr-[-20rem]">
          <div className="bg-white h-[2rem] flex justify-center items-center rounded-[50%] w-[5rem] h-[5rem]">
            <div className="bg-white h-[2rem] flex justify-center shadow-md items-center rounded-[50%] w-[4rem] h-[4rem] outline outline-gray-100">
              <img src={play} alt="" className="svg-icon " />
            </div>
          </div>
        </Link>
        </article>

        
      </div>
          </article>
          
          
        </section>
        
       

        <section className="flex">
            <div className="bg-[#48c4b4] w-[7rem] md:w-[8.9rem] lg:w-[8.9rem] xl:w-[11rem] 2xl:w-[13rem] h-[10rem] xl:h-[12rem] 2xl:h-[13.1rem] ml-[.6rem] md:ml-[3.1rem] lg:ml-[4.1rem] xl:ml-[22.1rem] 2xl:ml-[22.1rem] mt-[-9.3rem] rounded-2xl">

            </div>

            
        </section>
        <section className="flex justify-center gap-9 mt-[-3rem]">
        <article>
            <div className="bg-gray-200 px-3 rounded[2xl] w-[8rem] h-[3rem] rounded-2xl flex justify-center gap-5 items-center">
<span className="bg-[#48c4b4] rounded-[50%] text-white w-[2rem] ml-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white"> arrow_left_alt</span>
<p>Prev</p>
            </div>
          </article>
        <article>
            <div className="bg-gray-200 px-3 rounded[2xl] w-[8rem] h-[3rem] rounded-2xl flex justify-center gap-5 items-center">
<span className="bg-[#ffcc4a] rounded-[50%] text-white w-[2rem] ml-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white"> arrow_right_alt</span>
<p>Next</p>
            </div>
          </article>

            
        </section>
      
    </main>
  );
};

export default testimonials;
