import { useEffect, useCallback, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

interface UserInfo {
  // Define the structure of your user info here
  // For example:
  id: number;
  name: string;
  // ... other properties
}

interface UseGetUserInfoProps {
  endpoint: string;
}

const useGetUserInfo = ({ endpoint }: UseGetUserInfoProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState<boolean>(false);

  const getUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      // console.log(response.data);
      setUserInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [endpoint, token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return { userInfo, loading };
};

export default useGetUserInfo;
