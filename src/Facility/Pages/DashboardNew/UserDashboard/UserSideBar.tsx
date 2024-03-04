import { BiSolidDashboard } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import LogoutButton from "../components/LogoutButton";
import { useNavigate, useLocation } from "react-router-dom";
import { MouseEvent } from "react";

interface NavItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

const UserSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      link: "/user/dashboard/",
    },
    {
      name: "Profile",
      icon: <FiUsers />,
      link: "/user/dashboard/profile",
    },
  ];

  const handleNavClick = (link: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(link, { replace: true });
  };

  return (
    <div className="border-r-[#e9e6e6] border h-screen md:px-4">
      <div className="flex flex-wrap p-2 md:p-4 gap-4 text-[--green] justify-center items-center">
        <div className="bg-[--green] w-[2rem] h-[2rem] sm:h-[3rem] sm:w-[3rem] rounded-md "></div>
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Student</h1>
          <p className="text-center text-xs font-normal">DASHBOARD</p>
        </div>
      </div>

      <div className="flex flex-col gap-[20rem]">
        <ul className="mt-[2.4rem] mx-auto grid gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={handleNavClick(item.link)}
              className={`${location.pathname === item.link ? "bg-[--green] font-bold rounded-lg" : ""}`}
            >
              <li
                className={`text-xl flex items-center gap-4 p-2 sm:p-4 ${
                  location.pathname === item.link ? "text-white" : "text-slate-400"
                }`}
              >
                {item.icon}
                <p className="hidden md:block">{item.name}</p>
              </li>
            </button>
          ))}
        </ul>
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserSidebar;
