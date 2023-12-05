import design from "../images/method1.svg";
import design2 from "../images/method2.svg";
import design3 from "../images/method3.svg";
import design4 from "../images/method4.svg";
import design5 from "../images/method5.svg";

import '../App.css'


const Method = () => {
  return (
    <div className="mt-[4rem] mx-2 ">
      <header className="flex justify-center text-[1.5rem] font-bold">
        <h1>
          We applied the methods of design research to allow us to do the
          following:
        </h1>
      </header>
      <main className="flex justify-center lg:w-[70%] xl:w-[70%]  mx-auto ">
        <section className="grid grid-cols-2  mx-[auto] gap-[1rem]">
          <div className="flex my-[1rem]">
            <img src={design} alt="" />
            <div className="ml-4">
              <h2 className=" text-[1.5rem] font-bold">Design with Purpose:</h2>
              <p>
                We conducted a survey in the Lagos East Senatorial District,
                with 309 participants representing those who will benefit from
                SAIL Innovation Lab's co-design.
              </p>
            </div>
          </div>
          <div className="flex my-[1rem]">
            <img src={design2} alt="" />
            <div className="ml-4">
              <h2 className=" text-[1.5rem] font-bold">Problem Discovery:</h2>
              <p>
                Our design research methods helped us uncover the challenges
                faced by young people in Lagos East. We believe that
                understanding the problem is the first step towards solving it.
              </p>
            </div>
          </div>
          <div className="flex my-[1rem]">
            <img src={design3} alt="" />
            <div className="ml-4">
              <h2 className=" text-[1.5rem] font-bold">
                Insightful Engagement:
              </h2>
              <p>
                By connecting with the people, we gained invaluable insights and
                identified unique opportunities that can be transformed into
                effective solutions.
              </p>
            </div>
          </div>
          <div className="flex my-[1rem]">
            <img src={design4} alt="" />
            <div className="ml-4">
              <h2 className=" text-[1.5rem] font-bold">Co-Create:</h2>
              <p>
                We worked closely with the community to co-create solutions.
                These ideas were not just imagined but prototyped, rigorously
                tested, and refined before becoming reality.
              </p>
            </div>
          </div>
          <div className="flex my-[.75rem]">
            <img src={design5} alt="" />
            <div className="ml-4">
              <h2 className=" text-[1.5rem] font-bold">
                Turn Ideas into Action:
              </h2>
              <p>
                With human-centered design at our core, we've selected
                participants, embarked on field visits, and fostered visual
                engagements to bring positive change.
              </p>
            </div>
          </div>

          <div className="bg-[#ffcc4a] rounded-2xl">
            <h3 className="m-5 font-bold text-[1.1rem]">
              If you would like to read more about our findings. Kindly click
              the button below
            </h3>
            <button className="bg-white p-[.7rem] m-[1rem] flex items-center gap-2 hover:bg-[#184c94] hover:text-white">
              READ MORE 
              <span className="material-symbols-outlined hover:text-white"> arrow_right_alt</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Method;
