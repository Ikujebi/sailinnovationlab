import { FC, useState, useEffect, useRef } from "react";
import anime from "animejs";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import progAndInterestCard from "../images/Frame-18897.png";

interface Program {
  program: string;
}

interface progImage {
  src: string;
  alt: string;
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

  const progImages: progImage[] = [
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4862.jpg",
      alt: "Image 1",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4869.jpg",
      alt: "Image 2",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4873.jpg",
      alt: "Image 3",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4882.jpg",
      alt: "Image 4",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4894.jpg",
      alt: "Image 5",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4902.jpg",
      alt: "Image 6",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4910.jpg",
      alt: "Image 7",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4865.jpg",
      alt: "Image 8",
    },
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4935.jpg",
      alt: "Image 9",
    },
    
    {
      src: "https://sailab.ng/wp-content/uploads/2023/11/IMG_4859.jpg",
      alt: "Image 11",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<progImage | null>(null);

  const handleImageClick = (image: progImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };


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

  const registrationForm = "https://student-portal-form.vercel.app/";

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
              className="flex  ml-auto text-[1.2rem] font-black whitespace-nowrap "
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                color: "white",
                overflow: "hidden",
              }}
            >
              <span className={index === index ? "hover:text-[#ffcc4a]" : ""}>
                {progs[index].program}
              </span>
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
          <h2>Our Programs</h2>
          <div className="w-[16rem] relative">
            <img
              src={progAndInterestCard}
              alt=""
              className="w-[19rem] h-[15rem] mt-[1rem]"
            />

            <article
              id="cardTxt"
              className="absolute inset-0 flex flex-col justify-center items-center text-[1.3rem]"
            >
              <h6>Program Duration:</h6>

              <div
                id="white"
                className="bg-white h-[5rem] items-center hover:bg-[#184c94] font-normal whitespace-wrap hover:text-[white] text-[1.2rem] mt-[6rem] w-[11rem] flex justify-center"
              >
                <Link to={registrationForm}>
                  <p>Indicate Interest</p>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {progImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto cursor-pointer "
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </section>
        {selectedImage && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      
        </section>
      </main>
      <div className="mt-[10rem]">
        <Footer />
      </div>
    </div>
  );
};

export default OurProgramsNav;
