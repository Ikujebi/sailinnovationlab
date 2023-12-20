import { FC, useState, useEffect, useRef } from "react";
import anime from "animejs";

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

  const animateSlide = () => {
    if (containerRef.current) {
      anime({
        targets: containerRef.current,
        translateX: -index * 100 + "%",
        easing: "easeInOutQuad",
        duration: 5000, // Adjust this value for the speed of each slide
        complete: () => {
          // Increment the index and reset to 0 if it exceeds the array length
          setIndex((prevIndex) => (prevIndex + 1) % progs.length);

          // Call animateSlide again after a delay (e.g., 5000 milliseconds)
          setTimeout(animateSlide, 5000);
        },
      });
    }
  };

  useEffect(() => {
    // Start the initial animation when the component mounts
    animateSlide();

    // Clear the animation interval when the component unmounts
    return () => {
      anime.remove(containerRef.current);
    };
  }, []);


  return (
    <div className="mt-[5rem] text-gray-800">
      <header className="flex justify-center">
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
          <article className="bg-black h-[10svh] mx-[1rem] rounded-3xl mt-[1rem] flex">
            <div className="flex items-center">
              <span className="bg-[#ffcc4a] rounded-[50%] text-white w-[2rem] ml-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white">
                {" "}
                arrow_left_alt
              </span>
            </div>
            <div
              ref={containerRef}
              className="flex items-center text-[1.1rem] font-bold "
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                overflow: "hidden",
              }}
            >
              {progs.map((p, i) => (
                i === index && <div key={i} className="hover:text-[#ffcc4a]">{p.program}</div>
              ))}
            </div>
            <div className="flex items-center ml-auto">
              <span className="bg-[#ffcc4a] rounded-[50%] text-white w-[2rem] mr-5 h-[2rem] flex justify-center items-center material-symbols-outlined text-white">
                {" "}
                arrow_right_alt
              </span>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default OurProgramsNav;
