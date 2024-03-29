import ClockOutButton from "../components/ClockOutButton";
import ClockInButton from "../components/ClockInButton";
import { Outlet } from "react-router";
import useGetUserInfo from "../../../../hooks/useGetUserInfo";
import UserSidebar from "./UserSideBar";

const UserDashboard: React.FC = () => {
  const { userInfo, loading } = useGetUserInfo({ endpoint: "getUserInfo" });
 
  console.log("AYANFE'S ",userInfo);
  
  const time = new Date().getHours();
  if (loading || !userInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-full grid grid-cols-[5rem_1fr] min-h-[100svh] md:grid-cols-[15rem_1fr]">
      <div className=" bg-[--white] overflow-y-hidden h-[100vh]">
        <UserSidebar />
      </div>

      <div className=" ">
        <div className=" p-2 md:p-8 flex flex-wrap gap-4 justify-between items-center  ">
          <div>
            <p className=" text-black-600 font-bold">
              Hi {userInfo?.firstName + " " + userInfo?.lastName}
            </p>
            <h1 className=" text-xl font-bold text-[--green]">
              Welcome to SAIL!
            </h1>
          </div>
          <div>{time >= 1400 ? <ClockOutButton /> : <ClockInButton userInfo={userInfo} />}</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
