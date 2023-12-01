import ab from "../images/aboutimg1.png";
import arrow from "../images/arr-removebg-preview.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-[3rem] ">
      <section className="flex gap-6">
        <article className="w-[49.9%] ml-7">
          <img src={ab} alt="" className="w-[80%]" />
        </article>
        <article className="w-[50%]">
          <header className=" bg-[#184c94] text-white rounded-xl py-1 px-4 flex justify-center w-[8rem]">
            <h2>ABOUT US</h2>
          </header>
          <main>
            <div className=" text-[3rem] font-extrabold">
              <h1>About the </h1>
              <h1>Innovation Lab</h1>
            </div>
            <div>
              <p>
                At SAIL Innovation Lab, we’re more than just a space; we’re a
                vibrant community where innovation takes center stage.
              </p>
              <p>
                Located in the heart of Lagos East, we offer a dynamic
                environment for young individuals – students, graduates,
                entrepreneurs, and job seekers – to come together, learn, and
                create.
              </p>
              <button>
                <Link
              to="/guest"
              className=" text-white flex justify-center font-semibold  bg-[#184c94] py-2  px-4 mt-10 transition-transform hover:transform hover:-translate-y-3 hover:bg-white"
            >
              LEARN MORE{" "}
              <img
                src={arrow}
                alt="arrow"
                className=" ml-2 mt-[.44rem] w-4 h-3 "
                style={{ backgroundColor: '#39548E' }}
              />
            </Link>
              </button>
            </div>
          </main>
        </article>
      </section>
    </div>
  );
};

export default About;
