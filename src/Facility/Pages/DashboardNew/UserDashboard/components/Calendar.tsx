import { FC, useState } from "react";
import { Calendar, Modal } from "antd";
import  { Dayjs } from "dayjs"; // Import Dayjs and Dayjs type
import { EventData } from "../../../../../hooks/useEventData"; // Import EventData interface
import { BsThreeDots } from "react-icons/bs";

interface CalendarAppProps {
  eventData: EventData[];
}

const CalendarApp: FC<CalendarAppProps> = ({ eventData }) => {
  const [calendarVisible, setCalendarVisible] = useState(false)
  
  const toggleCalendarVisibility = () => {
    setCalendarVisible(!calendarVisible);
  };
  const openReminderModal = (value: Dayjs) => {
    const currentDate = value.format("YYYY-MM-DD");
    const eventsForDate = eventData.filter(
      (event) => event.eventDate === currentDate
    );


    

    Modal.info({
      title: "Events",
      content: (
        <div>
          {eventsForDate.map((event, index) => (
            <p key={index}>{event.eventName}</p>
          ))}
        </div>
      ),
    });
  };

  const dateCellRender = (value: Dayjs) => {
    const currentDate = value.format("YYYY-MM-DD");
    const hasEvent = eventData.some((event) => event.eventDate === currentDate);

    return (
      <div
        style={{
          background: hasEvent ? "#1890ff" : "inherit",
          borderRadius: "50%",
          padding: "4px",
          textAlign: "center",
        }}
        onClick={() => openReminderModal(value)}
      >
        {value.date()}
      </div>
    );
  };

  return (
    <div>
      <header className=" cursor-[pointer]" onClick={toggleCalendarVisibility}>
        <h1 className="flex gap-2 text-green-300 text-[1.6rem]"> 
        {calendarVisible ? "close calendar" : "open calendar"}{" "}
        <span className="mt-[.75rem] "><BsThreeDots/></span> </h1>
        
      </header>
      {calendarVisible && (
        <div className="mx-1">
          <Calendar cellRender={dateCellRender} />
        </div>
      )}
    </div>
  );
};

export default CalendarApp;
