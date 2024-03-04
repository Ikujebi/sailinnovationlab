import { FC } from "react";
import { Calendar } from "antd";
import  { Dayjs } from "dayjs"; // Import Dayjs and Dayjs type

const CalendarApp: FC = () => {
  const onPanelChange = (value: Dayjs, mode: string) => { // Use Dayjs instead of Moment
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return <Calendar onPanelChange={onPanelChange} />;
};

export default CalendarApp;
