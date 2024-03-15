import { FC } from "react";
import { Calendar, Modal } from "antd";
import  { Dayjs } from "dayjs"; // Import Dayjs and Dayjs type
import { EventData } from "../../../../../hooks/useEventData"; // Import EventData interface

interface CalendarAppProps {
  eventData: EventData[];
}

const CalendarApp: FC<CalendarAppProps> = ({ eventData }) => {
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
      <Calendar onPanelChange={dateCellRender} />
    </div>
  );
};

export default CalendarApp;
