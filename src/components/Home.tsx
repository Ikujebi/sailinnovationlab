import { useEffect, useRef, useState,FC } from "react";
import logo from "../images/sail-logo-white-1-1.png";
import arrow from "../images/arrow1-removebg-preview.png";
import anime, { AnimeInstance } from "animejs";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Achievement from "./Achievement";
import Method from "./Method";
import Programs from "./Programs";
import Testimonials from "./testimonials";
import Footer from "./Footer";
import AboutNav from "./AboutNav";

const Home: FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const pic1 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";
  const pic2 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004124-1.png";
  const pic3 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004133.png";
  const pic4 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004132.png";
  const pic5 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";

  const [_index, setIndex] = useState(0);
  const slides = [
    {
      image: pic1,
    },
    {
      image: pic2,
    },
    {
      image: pic3,
    },
    {
      image: pic4,
    },
    {
      image: pic5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const cardVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay interval to 5000 milliseconds (5 seconds)
  };

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
    <div className="karla">
    <div className="flex ">
      <div className="bg-[#184c94] h-screen w-[49.9%]">
        <header>
          <img src={logo} alt="sail logo" className="p-[1.7rem] w-[17rem]" />
        </header>
        <section className="ml-3 mt-[9rem] text-white xl:flex xl:flex-col xl:justify-end xl:items-end  xl:mr-[2rem]">
          <div>
            <div className="bg-white text-black flex justify-center items-center rounded-2xl h-[1.5rem] w-[10rem] md:w-[24rem] lg:w-[24rem] xl:w-[24rem] 2xl:w-[24rem] md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
              <h5>WELCOME TO SAIL INNOVATION LAB</h5>
            </div>
            <article className=" md:text-[2.3rem]  lg:text-[2.3rem]  xl:text-[2.3rem]  2xl:text-[2.3rem]  text-[.78rem] font-extrabold mt-8 mb-6">
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
            <p className=" text-black flex justify-center font-semibold  bg-[#ffcc4c]  p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white">
              OUR PROGRAMS{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3"
              />
            </p>
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
      <div className="white-bg w-[50%] mr-10">
        <nav className="mt-[2.5rem] w-[100%] flex gap-2 mr-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 justify-end md:font-normal lg:font-normal xl:font-normal 2xl:font-normal font-bold md:text-[1.15rem]  lg:text-[1.15rem]  xl:text-[1.15rem]  2xl:text-[1.15rem]  text-[.58rem]">
         <Link to={"/aboutNav"}> <p className=" ">About Us</p></Link>
          <p>Our Programs</p>
          <p>Blog</p>
          <Link to={"/guest"}>
            <p>Visit</p>
          </Link>
        </nav>
        <div
          id="services"
          className="flex justify-center align-center px-2 mt-[7rem]"
        >
          <div className="container">
            <Slider {...sliderSettings}>
              {slides.map((item, itemIndex) => (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={cardVariants}
                  transition={{ duration: 0.5 }}
                  key={itemIndex}
                >
                  <img
                    src={item.image}
                    alt="service"
                    className="w-full  px-1 xl:w-[full] lg:w-[full] md:w-[full] mb-4 xl:h-[35rem] lg:h-[30rem] md:h-[27rem] h-[8rem]"
                  />
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      </div>
      <section className="">
        <header className="flex justify-center">
      <About/>
      </header>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Achievement/>
      </section>
      <section>
        <Method/>
      </section>
      <section className="">
        <Programs/>
      </section>
      <section className="">
        <Testimonials/>
      </section>
      <section className="lg:mt-[3rem] xl:mt-[15rem] 2xl:mt-[15rem]">
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
