import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL2 } from '../constants/baseUrl';

interface ParticipantInfo {
  id: number;
  firstName: string;
  email: string;
  lastName: string;
  programme: string;
  clockInDate: string | null;
  clockOutDate: string | null;
  clockInStatus: boolean;
  approvalStatus: string | null;
}

const useFetchDisapprovedParticipants = () => {
  const [rejectedParticipantsInfo, setRejectedParticipantsInfo] = useState<ParticipantInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const rejectedResponse = await axios.get(`${BASE_URL2}getAllDisapprovedParticipants`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setRejectedParticipantsInfo(rejectedResponse.data.data.totalParticipants);
        setLoading(false);
        console.log(rejectedResponse.data.data.totalParticipants.length);

        const disapprovedElement = document.getElementById('disapproved');
        if (disapprovedElement) disapprovedElement.textContent = rejectedResponse.data.data.totalParticipants.length.toString();
      } catch (error) {
        console.error("Error fetching disapproved participants:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { rejectedParticipantsInfo, loading };
};

export default useFetchDisapprovedParticipants;
