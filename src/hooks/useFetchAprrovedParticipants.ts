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

const useFetchApprovedParticipants = () => {
  const [approvedParticipants, setApprovedParticipants] = useState<ParticipantInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
console.log('tokenn!!!!!',token);

        const totalResponse = await axios.get(`${BASE_URL2}getAllApprovedParticipants`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setApprovedParticipants(totalResponse.data.data.totalParticipants);
        setLoading(false);
        console.log("Total Response Data:", totalResponse.data); // Log the entire response data
      console.log("Total Participants:", totalResponse.data.data.totalParticipants); // Log only the participants data
      console.log("Total Participants Length:", totalResponse.data.data.totalParticipants.length); // Log the length of participants array

        console.log(totalResponse.data.data.totalParticipants.length);

        const totalElement = document.getElementById('total');
        if (totalElement) totalElement.textContent = totalResponse.data.data.totalParticipants.length.toString();
      } catch (error) {
        console.error("Error fetching pending participants:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {approvedParticipants , loading };
};

export default useFetchApprovedParticipants;
