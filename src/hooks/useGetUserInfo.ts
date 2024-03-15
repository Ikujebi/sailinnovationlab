import { useEffect, useCallback, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

interface UserInfo {
  id?: number;
  firstName: string;
  email: string;
  lastName: string;
  role: string;
  lga: string;
  programme: string;
  sex: string;
  techStack: string;
  occupation: string;
  clockInStatus?: string;
}

interface UseGetUserInfoProps {
  endpoint: string;
}

const useGetUserInfo = (props: UseGetUserInfoProps) => {
  const { endpoint } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const token = sessionStorage.getItem("token");
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
      console.log("profile!!!",response.data);
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
