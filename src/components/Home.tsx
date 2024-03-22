import { useEffect,  useState,FC } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./About";
import Services from "./Services";
import Achievement from "./Achievement";
import Method from "./Method";
import Programs from "./Programs";
import Testimonials from "./testimonials";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import HomeComponent from "./HomeComponent";


const Home: FC = () => {
  

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
    autoplay: true, 
    autoplaySpeed: 5000, 
  };

  

 

  return (
    <div className="karla">
    <div className="flex ">
      <HomeComponent/>
      <div className="white-bg w-[50%] mr-10 ">
        <HeaderNav margin/>
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
                    className="w-full  px-[3rem] 2xl:px-[7rem] mb-4 xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[8rem]"
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
      <section className="mt-[10rem]">
        <Testimonials/>
      </section>
      <section className="lg:mt-[3rem] xl:mt-[15rem] 2xl:mt-[15rem]">
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
