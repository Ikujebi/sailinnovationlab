import { FC } from "react";
import grid from "../images/grid.png";


const testimonials: FC = () => {
  const testimonial1 =
    "https://sailab.ng/wp-content/uploads/2023/10/rec-area-14.gif";
  
  return (
    <main className="h-[60svh] mt-[2rem]">
      <div className="flex justify-end">
        <img src={grid} alt="dfe" className="md:w-[13rem] lg:w-[13rem] xl::w-[20rem] 2xl:w-[20rem] w-[9rem] mr-[.5rem] md:mr-[1rem] lg:mr-[1rem] xl:mr-[13rem] 2xl:mr-[15rem] xl:mb-[-3rem] 2xl:mb-[-3rem]" />
      </div>
      
        <section className=" flex justify-center">
          <div>
            <img
              src={testimonial1}
              alt="dfe"
              className="z-2 relative w-[19rem] md:w-[45rem] lg:w-[45rem] xl:w-[60rem] 2xl:w-[62rem] h-[11.5rem] md:h-[20rem] lg:h-[20rem] xl::h-[26rem] 2xl:h-[28rem] rounded-2xl mb-[3rem] mt-[-6rem]"
            />
          </div>
          
        </section>

        <section className="flex z-1">
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
