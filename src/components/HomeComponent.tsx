import {  useRef,FC, useEffect } from "react";
import logo from "../images/sail-logo-white-1-1.png";
import { Link } from "react-router-dom";
import arrow from "../images/arrow1-removebg-preview.png";
import anime, { AnimeInstance } from "animejs";


const HomeComponent :FC = () => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const strings = ["Innovation", "Dreams", "Creativity!", "Ideas"];
    
        let currentStringIndex = 0;
    
        const updateTextContent = () => {
          if (textRef.current) {
            textRef.current.textContent = strings[currentStringIndex];
            currentStringIndex = (currentStringIndex + 1) % strings.length;
          }
        };
    
        const textAnimation: AnimeInstance = anime({
          targets: textRef.current,
          translateY: ["-1rem", 0],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2500, // Adjust the duration for a slower transition
          complete: () => {
            // Start the exit animation after the entrance is complete
            anime({
              targets: textRef.current,
              translateY: [0, "1rem"],
              opacity: [1, 0],
              easing: "easeInOutQuad",
              duration: 2500, // Adjust the duration for a slower exit
              complete: updateTextContent, // Call the update function after the exit animation
            });
          },
        });
    
        textAnimation.restart();
    
        // Update strings every 3 seconds
        const stringChangeInterval = setInterval(() => {
          textAnimation.restart();
        }, 3000);
    
        // Cleanup on unmount
        return () => {
          clearInterval(stringChangeInterval);
          textAnimation.pause();
        };
      }, []);
    
     
  return (
    <div className="bg-[#184c94]  h-screen w-[99.9%] karla xl:pl-[10%] 2xl:pl-[10%] md:w-[49.9%] xl:w-[49.9%] 2xl:w-[49.9%]">
        <header>
          <img src={logo} alt="sail logo" className="p-[1.7rem] w-[17rem]" />
        </header>
        <section className="ml-3 mt-[9rem] text-white xl:flex xl:flex-col xl:justify-center xl:items-center  xl:mr-[2rem]">
          <div>
            <div className="bg-white text-black flex justify-center items-center rounded-2xl h-[1.5rem] w-[10rem] md:w-[20rem] lg:w-[22rem] xl:w-[22rem] 2xl:w-[24rem] md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
              <h5>WELCOME TO SAIL INNOVATION LAB</h5>
            </div>
            <article className=" md:text-[2.3rem]  lg:text-[2.3rem]  xl:text-[2.6rem]  2xl:text-[3rem]  text-[.78rem] font-extrabold mt-8 mb-6">
              <h5>
                Where{" "}
                <span
                  id="ref"
                  ref={textRef}
                  className="bg-[#5073A8] text-[#ffcc4c] p-2 rounded-md"
                ></span>
              </h5>
              <h5>Thrives in Lagos East</h5>
            </article>
            <div>
              <p className=" md:w-[25rem] md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
                Whether you’re a budding entrepreneur, a tech enthusiast, or a
                curious learner, SAIL is your canvas for growth.
              </p>
            </div>
          </div>
          <article className=" md:w-[15rem] lg:w-[15rem] xl:w-[15rem] 2x:lw-[15rem] w-[9rem] md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
            <Link to={"/programNav"} className=" text-black flex justify-center font-semibold  bg-[#ffcc4c]  p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white">
              OUR PROGRAMS{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3"
              />
            </Link>
            <Link
              to="/guest"
              className=" text-black flex justify-center font-semibold  bg-[#fccc4c]  p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white"
            >
              WANT TO VISIT ?{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3 "
              />
            </Link>
          </article>
        </section>
      </div>
  )
}

export default HomeComponent