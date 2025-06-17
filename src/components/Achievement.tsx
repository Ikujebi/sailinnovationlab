import {FC} from 'react'
import achieve from '../images/achieve5.png'


const Achievement:FC = () => {
  return (
    <div className="md:mt-[10rem]  lg:mt-[10rem] xl:mt-[10rem] 2xl:mt-[10rem] mt-[60rem] ">
      <div className=" bg-black">
        <div className="ml-[2rem]">
          <header className="pt-[3.4rem]">
            <h2 className=" bg-[#ffcc4c] w-[6rem] flex justify-center px-4 rounded-lg ">
              WORKS
            </h2>
            <h3 className="text-white text-[2rem] font-black">
              What We’ve Achieved
            </h3>
          </header>
          <main className="text-white pb-[10rem]">
            <p>
              Using a human-centered design approach, we conducted a survey in
              the
            </p>
            <p>
              Lagos East Senatorial District with a total of 309 participants.
              The
            </p>
            <p>
              participants served as an accurate representation of people who
              would
            </p>
            <p>
              either directly or indirectly benefit from the SAIL Innovation
              Lab’s co-design
            </p>
          </main>
        </div>
      </div>
      <footer className="flex h-[40%]  flex justify-center mt-[-8rem] ">
     <img src={achieve} alt="" className='md:w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] w-[20rem]  h-[41rem]'/>
      </footer>
    </div>
  );
};

export default Achievement;
