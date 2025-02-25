import  { FC } from "react";
import { FiUsers } from "react-icons/fi";
import Chart from "./Chart/Chart";
import RecentClockIn from "./ClockInHistory/RecentClockIn";
import useGetParticipantInfo from "../../../../hooks/useGetParticipants";
import Greetings from "./Greeting";
import useApplicantInfo from "../../../../hooks/useApplicantInfo";
import useFetchAprrovedParticipants from "../../../../hooks/useFetchAprrovedParticipants";
import useFetchDisapprovedParticipants from "../../../../hooks/useFetchDisapprovedParticipants"
import useFetchPendingParticipants from "../../../../hooks/useFetchPendingParticipants"
import BigChart from "./Bigchart";
import { Calendar,Spin } from "antd";



const Details: FC = () => {
  const { participantsInfo } = useGetParticipantInfo();
  const { applicantsantsInfo: applicantsantsInfo, loading: _applicantLoading } = useApplicantInfo()// Use the useApplicantInfo hook
 const {approvedParticipants:approvedParticipants, loading: _approvedParticipantsLoading} = useFetchAprrovedParticipants()
 const {pendingParticipants:pendingParticipants, loading: _pendingParticipantsLoading} = useFetchPendingParticipants()
 const {rejectedParticipantsInfo:rejectedParticipantsInfo, loading: _rejectedParticipantsInfoLoading} = useFetchDisapprovedParticipants()

 

const present = participantsInfo?.filter((participant) => participant.clockInStatus);

const absent = participantsInfo?.filter((participant) => !participant.clockInStatus);

const clockOuts = participantsInfo?.filter((participant) => participant.clockInStatus === false);


  const items = [
    {
      icon: <FiUsers />,
      title: "Total APPLICANTS",
      value: applicantsantsInfo?.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
    {
      icon: <FiUsers />,
      title: "Approved Applicants",
      value: approvedParticipants?.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
    {
      icon: <FiUsers />,
      title: "Pending Applicants",
      value: approvedParticipants?.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
    {
      icon: <FiUsers />,
      title: "Rejected Applicants",
      value: rejectedParticipantsInfo?.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
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
  const applicantChartData = [
    { name: "Approved", value: approvedParticipants?.length },
    { name: "Pending", value: pendingParticipants?.length },
  ];
 
  const isLoading = _approvedParticipantsLoading || _applicantLoading;

  return (
    <div className="">
      <div>
        <div className="pl-5">
        <Greetings/>
        </div>
        
        <div className="flex flex-wrap gap-[1rem] rounded-lg mb-10">
          {items.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className="bg-white shadow px-[1rem] py-[1rem] m-2 rounded-lg"
            >
              <span className="flex items-center gap-2">
                <span className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2">
                {item.icon}
                </span>
                
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
{/* <ClockInButton/> */}
      </div>

      <div className="mt-[10rem] w-full md:w-2/5 flex justify-center">
  {isLoading ? <Spin size="large" /> : <BigChart data={applicantChartData} />}
</div>


      <div className="mt-[10rem]">
        <div className="flex flex-wrap lg:flex-nowrap gap-[2rem] md:gap-[4rem] pl-4">
          <RecentClockIn participantsInfo={present} />
          
        <Chart />
        </div>
        <div className="mt-[7rem]">
          <Calendar/>
        </div>
      </div>
    </div>
  );
};

export default Details;
