import {FC} from "react"
import CalendarApp from "./Calendar";
import { useEventData } from "../../../../../hooks/useEventData";
import { Spin } from "antd";

const UserDetails: FC = () => {

  const {eventDatas, loading} = useEventData()
  return (
    <Spin spinning={loading} className="p-2 md:p-8">
      <CalendarApp eventData={eventDatas}/>
    </Spin >
  );
};

export default UserDetails;
