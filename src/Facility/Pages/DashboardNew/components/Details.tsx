import  { FC } from "react";
import { FiUsers } from "react-icons/fi";
import Chart from "./Chart/Chart";
import RecentClockIn from "./ClockInHistory/RecentClockIn";
import useGetParticipantInfo from "../../../../hooks/useGetParticipants";

interface ParticipantInfo {
  firstName: string;
  lastName: string;
  clockInDate: string | null;
  clockOutDate: string | null;
  clockInStatus: boolean;}

const Details: FC = () => {
  const { participantsInfo } = useGetParticipantInfo();
console.log("ParticipantsInfo",participantsInfo);

const present = participantsInfo?.filter((participant) => participant.clockInStatus);

const absent = participantsInfo?.filter((participant) => !participant.clockInStatus);

const clockOuts = participantsInfo?.filter((participant) => participant.clockInStatus === false);
console.log("Filtered Present Participants:", present);
console.log("Filtered Absent Participants:", absent);
console.log("Filtered ClockOut Participants:", clockOuts);                  

  const items = [
    {
      icon: <FiUsers />,
      title: "Total Participant",
      value: participantsInfo?.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Clocked-In Participant",
      value: present?.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Absent Participant",
      value: absent?.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Clocked-Out Participant",
      value: clockOuts?.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
  ];
  console.log("THIS IS PRESENT",present);
  

  return (
    <div className="">
      <div>
        <div className="flex flex-wrap gap-[1rem] rounded-lg mb-10">
          {items.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className="bg-white shadow px-[1rem] py-[1rem] m-2 rounded-lg"
            >
              <span className="flex items-center gap-2">
                {item.icon}
                <h1
                  style={{ color: item.textColor }}
                  className="font-bold flex items-center gap-2"
                >
                  {item.title}
                </h1>
              </span>
              <p className="text-gray-600 font-bold text-center">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap lg:flex-nowrap gap-[2rem] md:gap-[4rem] pl-4">
          <RecentClockIn participantsInfo={present} />
          
        <Chart />
        </div>
      </div>
    </div>
  );
};

export default Details;
