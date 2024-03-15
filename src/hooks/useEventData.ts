import { useState, useEffect } from 'react';
import axios from 'axios';

export interface EventData {
  _id: string;
  eventName: string;
  eventDate: string;
  speaker: string;
}

export const useEventData = () => {
  const [eventDatas, setEventDatas] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get<{ data: EventData[] }>(`${import.meta.env.VITE_APP_SSMP_BACKEND_API}events/getAllEvents`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setEventDatas(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event data:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  return { eventDatas, loading };
};
