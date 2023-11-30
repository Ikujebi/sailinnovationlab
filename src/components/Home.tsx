import { useEffect, useRef, useState } from "react";
import logo from "../images/sail-logo-white-1-1.png";
import arrow from "../images/arrow1-removebg-preview.png";
import anime, { AnimeInstance } from "animejs";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";

const Home: React.FC = () => {
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

  const [index, setIndex] = useState(0);
  const slides = [
    {
      image: pic1,
      title: "Web Development",
      description: "I specialize in building scalable web applications.",
    },
    {
      image: pic2,
      title: "Web Design",
      description: "I'm passionate about creating visually stunning webpages.",
    },
    {
      image: pic3,
      title: "Mobile Apps",
      description:
        "I'm currently learning to build mobile apps using React Native.",
    },
    {
      image: pic4,
      title: "Project Management",
      description:
        "Having studied business administration for my first degree, I am currently trying to hone my project management skills.",
    },
    {
      image: pic5,
      title: "Project Management",
      description:
        "Having studied business administration for my first degree, I am currently trying to hone my project management skills.",
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

    // Initial start
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
    <div className="flex">
      <div className="bg-[#39548E] h-screen w-[49.9%]">
        <header>
          <img src={logo} alt="sail logo" className="p-[1.7rem] w-[17rem]" />
        </header>
        <section className="ml-3 mt-[9rem] text-white xl:flex xl:flex-col xl:justify-end xl:items-end  xl:mr-[2rem]">
          <div>
            <div className="bg-white text-black flex justify-center items-center rounded-2xl h-[1.5rem] w-[10rem] md:w-[24rem] lg:w-[24rem] xl:w-[24rem] 2xl:w-[24rem]">
              <h5>WELCOME TO SAIL INNOVATION LAB</h5>
            </div>
            <article className=" text-[2.3rem] font-extrabold mt-8 mb-6">
              <h5>
                Where{" "}
                <span
                  id="ref"
                  ref={textRef}
                  className="bg-[#5073A8] p-2 rounded-md"
                ></span>
              </h5>
              <h5>Thrive in Lagos East</h5>
            </article>
            <div>
              <p className=" md:w-[25rem] text-[1.04rem]">
                Whether you’re a budding entrepreneur, a tech enthusiast, or a
                curious learner, SAIL is your canvas for growth.
              </p>
            </div>
          </div>
          <article>
            <p className=" text-black flex justify-center font-semibold  bg-[#DAA520] w-[15rem] p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white">
              SEE OUR PROGRAMS{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3"
              />
            </p>
            <p className=" text-black flex justify-center font-semibold  bg-[#DAA520] w-[15rem] p-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white">
              WANT TO VISIT ?{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3 "
              />
            </p>
          </article>
        </section>
      </div>
      <div className="white-bg w-[50%] mr-10">
        <nav className="mt-[2.5rem] w-[100%] flex gap-6 justify-end font-normal text-[1.15rem]">
          <p className=" ">About Us</p>
          <p>Our Programs</p>
          <p>Blog</p>
        </nav>
        <div id="services" className="flex justify-center align-center px-2 mt-[7rem]">
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
  );
};

export default Home;
