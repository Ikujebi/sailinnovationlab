import { FC, useState, useEffect, useRef } from "react";
import anime from "animejs";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

interface Program {
  program: string;
}

const OurProgramsNav: FC = () => {
  const progs: Program[] = [
    {
      program: "Startup Accelerator Program",
    },
    {
      program: "Data Science",
    },
    {
      program: "Tech Talent Development",
    },
    {
      program: "STEM Education for Senior Secondary School Students",
    },
    {
      program: "Lagos East Teachers’ Fellowship",
    },
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateSlide = () => {
      if (containerRef.current) {
        const programContainer = containerRef.current;

        // Slide out the current program to the left
        anime({
          targets: programContainer,
          translateX: ["0%", "-99%"],
          easing: "easeInOutQuad",
          duration: 6000,
          complete: () => {
            // Increment the index and reset to 0 if it exceeds the array length
            setIndex((prevIndex) => (prevIndex + 1) % progs.length);

            // Update the content of the container
            programContainer.innerText = progs[index].program;

            // Reset the translation to 0 and animate the next slide after a delay
            anime.set(programContainer, { translateX: "0%" });
            setTimeout(() => {
              animateSlide();
            }, 4000);
          },
        });
      }
    };

    animateSlide();

    // Clear the animation interval when the component unmounts
    return () => {
      anime.remove(containerRef.current);
    };
  }, [index, progs]);

  const progAndInterestCard = "https://sailab.ng/wp-content/uploads/2023/10/Frame-18897.png"

  return (
    <div className="mt-[1.5rem] text-gray-800 karla">

    <HeaderNav />
      <header className="flex justify-center mt-[5rem]">
        <h1 className="flex justify-center w-[22rem] mb-[2rem] py-[.1rem] bg-[#184c94] text-white rounded-xl">
          PROGRAMS
        </h1>
      </header>

      <div>
        <h2 className="flex justify-center font-black text-[2.5rem] text-gray-800">
          Our Programs Details
        </h2>
      </div>
      <main>
        <section>
          <article
            className="bg-black h-[10svh] mx-[1rem] rounded-3xl mt-[1rem] flex hover:text-[#ffcc4a] 2xl:mx-[20rem] xl:mx-[10rem]"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 3fr))",
            }}
          >
            <div className="flex items-center w-[20%]">
              <span className="bg-[#ffcc4a] rounded-[50%] text-white w-[2rem] ml-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white">
                {" "}
                arrow_left_alt
              </span>
            </div>
            <div
              ref={containerRef}
              className="flex  ml-auto text-[1.2rem] font-black whitespace-nowrap"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                color: "white",
                overflow: "hidden",
              }}
            >
              {progs[index].program}
            </div>
            <div className="flex items-center ml-auto w-[20%]">
              <span className="bg-[#ffcc4a] rounded-[50%] text-white w-[2rem] mr-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white">
                {" "}
                arrow_right_alt
              </span>
            </div>
          </article>
        </section>
        <section className="w-[70%] flex mx-auto mt-[5rem] justify-between text-[1.9rem] font-bold">
          <h2>
          Our Programs
          </h2>
        <div className="w-[16rem]"
        
        >
          <img src={progAndInterestCard} alt="" className="w-[15rem] mt-6"/>

          <article className="mt-[-15rem] flex flex-col mx-[1.4rem] text-[1.3rem]">
            <h6>
            Program Duration:
            </h6>

            <div id="white" className="bg-white h-[5rem] items-center hover:bg-[#184c94] font-normal whitespace-wrap hover:text-[white] text-[1.2rem] mt-[6rem] w-[11rem] flex  justify-center">
              <p>Indicate Interest</p>
            </div>
          </article>
        </div>
        </section>
      </main>
      <div className="mt-[10rem]">
      <Footer/>
      </div>
      
    </div>
  );
};

export default OurProgramsNav;
