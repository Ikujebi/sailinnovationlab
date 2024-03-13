import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL2 } from "../constants/baseUrl";

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

const useParticipantData = () => { // Add endpoint parameter
  const [applicantsantsInfo, setapplicantsantsInfo] = useState<ParticipantInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
   console.log('toke0rgfb!!!!',token);
   
   
        const response = await axios.get(`${BASE_URL2}getAllUsers`, { // Use endpoint parameter
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        const totalParticipants =response.data.data.totalParticipants
        setapplicantsantsInfo(totalParticipants);
        console.log('TotalParticipants!!!!!',totalParticipants);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Add endpoint to dependency array

  return { applicantsantsInfo, loading };
};

export default useParticipantData;
