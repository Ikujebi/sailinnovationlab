import { Card } from "antd";
import { FC } from "react";

interface CustomCardProps {
  image: string;
  title: string;
  details?: string;
}

const CustomCard: FC<CustomCardProps> = ({ image, title, details }) => (
  <Card
    hoverable
    className="mb-[1.5rem] border-none md:w-[20rem] w-[15rem] lg:w-[30rem] xl::w-[30rem] 2xl:w-[30rem] ml-6"
    cover={<img alt={title} src={image} />}
  >
    <Card.Meta title={title} description={details} />
  </Card>
);

const Programs: FC = () => {
  const pic1 = "https://sailab.ng/wp-content/uploads/2023/10/Image-16.png";
  const pic2 = "https://sailab.ng/wp-content/uploads/2023/10/Image-17.png";
  const pic4 = "https://sailab.ng/wp-content/uploads/2023/10/Image-15.png";
  const pic3 = "https://sailab.ng/wp-content/uploads/2023/10/Image-14.png";

  const cards = [
    {
      image: pic1,
      title: "Lagos East Teachers’ Fellowship",
      details:
        "We empower educators with inquiry-based learning and tech integration strategies for the modern classroom",
    },
    {
      image: pic2,
      title: "STEM Education for Senior Secondary School Students",
      details:
        "Dive into the exciting world of STEM through our embedded system fellowship",
    },
    {
      image: pic3,
      title: "Data Science",
    },
    {
      image: pic4,
      title: "Tech Talent Development",
      details:
        "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
    },
  ];

  return (
    <div className="mt-[5rem] text-gray-800">
      <header className=" flex justify-center ">
        <h1 className=" flex justify-center w-[23rem] mb-[2rem] bg-[#184c94] text-white rounded-xl ">
          PROGRAMS
        </h1>
      </header>
      <div>
        <h2 className=" flex justify-center font-black text-[2.5rem] text-gray-800">
          Our Programs
        </h2>
        <p className=" flex justify-center text-gray-800">
          SAIL Innovation Lab is proud to offer an array of transformative
          programs
        </p>
        <p className=" flex justify-center text-gray-800">
          tailored for the youth of Lagos East Senatorial District:
        </p>
      </div>
      <div>
        <div className="mx-[auto] flex justify-center ">
          <div className="grid grid-cols-2 ">
            {cards.map((card, index) => (
              <CustomCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
