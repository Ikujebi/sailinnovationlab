import { FC } from "react";
import kite1 from '../images/rhombus (3).png'
import kite2 from '../images/rhombus (1).png'
import kite3 from '../images/rhombus (2).png'
import kitespecial from '../images/kite1.png'
import circle from '../images/top-view-yellow-circle-white-background-removebg-preview.png'

interface CardData {
  image: number;
  title: string;
  content: string;
}

const Services: FC = () => {
  const cardData: CardData[] = [
    {
      image: 1,
      title: "Coworking Space",
      content:
        "Empower young minds with a dynamic learning, exploration, and discovery environment",
    },
    {
      image: 2,
      title: "Incubation Programs",
      content:
        "Fuel innovation in our community by providing a nurturing space for idea development and validation",
    },
    {
      image: 3,
      title: "Tech Trainings",
      content:
        "Equip individuals with the essential skills needed to thrive in today's tech-driven world",
    },
    {
      image: 4,
      title: "Social Programs",
      content:
        "Foster a sense of belonging through diverse social activities, creating a welcoming home-like environment",
    },
    {
      image: 5,
      title: "Events and Community",
      content:
        "Nurture connections and engagement with our events and vibrant community",
    },
    {
      image: 6,
      title: "Lifelong Learning",
      content:
        "Offer opportunities for continuous growth to small business owners, educators, and parents",
    },
  ];

  const backgroundColors = [
    "#48c4b4", // Coworking Space
    "#2596be", // Incubation Programs
    "#48c4b4", // Tech Trainings
    "#184c94", // Social Programs
    "#ffcc4c", // Events and Community
    "#184c94", // Lifelong Learning
  ];

  const shapes =[
    kitespecial,kitespecial,kitespecial,kite2,kite1,circle
  ]
console.log();

  return (
    <div>
      <div className="flex flex-col justify-center mt-[8rem]">
        <header className="flex flex-col justify-center">
          <h1 className="bg-[#48c4b4] rounded-xl w-[20rem] mx-[auto] text-white text-[1.1rem] flex justify-center">
            Services
          </h1>
          <h2 className="text-[2.8rem] mt-[1rem] font-black flex justify-center text-gray-800">
            What We Offer
          </h2>
        </header>
      </div>
      <main className="md:w-[58rem] lg:w-[75rem] xl:w-[75rem] 2xl:w-[75rem] w-[21.5rem]    mx-auto ">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4 h-[55rem] md:h-[55rem] lg:h-[45rem] xl:h-[45rem] 2xl:h-[45rem]">
          {cardData.map((card, index) => (
            <article key={index} className="flex flex-col h-full ">
              <div className="flex-grow border border-gray-300 p-4 rounded-xl ">
                <div
                  id="diagram"
                  style={{ backgroundColor: backgroundColors[index] }}
                  className="w-[5rem] h-[5rem] bg-blue-500 mb-4 mt-[2.5rem] "
                >
                  
                    <img id={`shape-${index}`} src={shapes[index]} alt="" className="p-2  hover:rotate-180"/>
                  
                </div>
                <h1 className="font-bold text-2xl leading-8 mb-2">
                  {card.title}
                </h1>
                <p className="text-[1.01rem] md:text-[1.2rem]">
                  {card.content}
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Services;
