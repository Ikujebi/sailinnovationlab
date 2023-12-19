import { FC, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

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

  const slideAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % progs.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [progs.length]);

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
            <animated.div
              style={{
                ...slideAnimation,
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              {progs.map((p, i) => (
                i === index && <div key={i}>{p.program}</div>
              ))}
            </animated.div>
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
