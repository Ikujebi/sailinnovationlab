import { Card } from "antd";

const Services = () => {
  const cardData = [
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
        "Nurture connections and engagement with our events and Vibrant community",
    },
    {
        image: 6,
      title: "Lifelong Learning",
      content:
        "Offer opportunities for continuous growth to small business owners, educators, and parents",
    },
  ];

  return (
    <div className="flex justify-center mt-[8rem]">
      <header className=" flex flex-col justify-center  ">
        <h1 className="bg-[#48c4b4] rounded-xl w-[20rem] text-white text-[1.1rem] flex justify-center">
          Services
        </h1>
        <h2 className=" text-[2.8rem] mt-[1rem] font-black flex justify-center text-gray-800">
          What We Offer
        </h2>
      </header>
      <main></main>
    </div>
  );
};

export default Services;
