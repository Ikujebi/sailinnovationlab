import {useEffect} from "react";
import { PiCloudSunDuotone } from "react-icons/pi";
import { PiSunBold } from "react-icons/pi";
import { FcNightLandscape } from "react-icons/fc";
import useGetUserInfo from "../../../../hooks/useGetUserInfo";

function Greetings() {
  const { userInfo, loading } = useGetUserInfo({ endpoint: "getUserInfo" });
 

  let timeOfDay: string;
  let IconComponent : any
  const date = new Date();
  const hours = date.getHours();
  const styles: React.CSSProperties = {
    fontSize: 23,
  };
 
  useEffect(() => {
    if (!loading && userInfo) {
      // Use the user's first name here
      console.log("FIRSTname",userInfo.firstName);
    }
  }, [userInfo, loading]);

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#D90000";
    IconComponent = <PiCloudSunDuotone />;
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#333000";
    styles.fontSize = 20;
    IconComponent = <PiSunBold />;
  } else {
    timeOfDay = "Evening";
    styles.color = "#04756F";
    IconComponent = <FcNightLandscape />;
  }

  return (
    <h1 className="flex gap-3 mt-[-2rem] font-bold" style={styles}>
      {" "}
      Good {timeOfDay}{" , "}
      {userInfo && userInfo?.firstName}
      <span className="text-4xl text-yellow-500">
        {IconComponent}
      </span>
    </h1>
  );
}

export default Greetings;
