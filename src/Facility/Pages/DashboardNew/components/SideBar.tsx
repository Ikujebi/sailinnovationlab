import {Fragment} from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import LogoutButton from "./LogoutButton";
import { useNavigate, useLocation } from "react-router";

interface NavItem {
  name: string;
  icon: JSX.Element;
  link: string;
  spacing?: boolean;
  subItems?: NavItem[];
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      link: "/dashboard/details",
    },
    {
      name: "Clock-Ins",
      icon: <CgNotes />,
      link: "/dashboard/details/clockins",
    },
    {
      name: "Profile",
      icon: <FiUsers />,
      link: "/dashboard/details/profile",
    },
    {
      name: "Participants",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/participants",
    },
    {
      name: "Applicantions",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/participantsSelection",
    },
    {
      name: "Instructors",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/instructors",
    },
    {
      name: "Update Events",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/updatedEvent",
    },
    {
      name: " Events",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/Events",
    },
    {
      name: "Applications",
      icon: <GoCommentDiscussion />,
      link: "",
      subItems: [
        { name: "Approved Students", icon: <CgNotes />, link: "/dashboard/details/participants" },
        { name: "Rejected Students", icon: <CgNotes />, link: "/dashboard/details/rejectedParticipants" },
      ],
    },
  ];

  return (
    <div className="border-r-[#e9e6e6] border fixed h-screen px-1">
      <div className="flex flex-wrap p-4 gap-4 text-[--green] items-center">
        <div className="bg-[--green] h-[3rem] w-[3rem] rounded-md"></div>
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Admin</h1>
          <p className="text-xs font-normal">DASHBOARD</p>
        </div>
      </div>

      <div className="flex flex-col gap-[10rem]">
        <ul className={`mt-[2.4rem] mx-auto grid` }>
          {navItems.map((item, index) => (
            <Fragment key={index}>
              <button
                onClick={() => navigate(item.link, { replace: true })}
                className={`${
                  location.pathname === item.link ? "bg-[--green] font-bold rounded-lg" : ""
                }`}
              >
                <li
                  className={`text-xl flex items-center gap-4 p-2 ${
                    location.pathname === item.link ? "text-white" : " text-slate-400"
                  }`}
                >
                  {item.icon}
                  <p className="hidden md:block">{item.name}</p>
                </li>
              </button>
              {item.subItems && (
                <ul>
                  {item.subItems.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="block"
                      onClick={() => navigate(subItem.link, { replace: true })}
                    >
                      <li
                        className={`text-xl flex  items-center  gap-1 pb-[.3rem] ml-4  ${
                          location.pathname === subItem.link
                            ? "bg-[--green] font-bold rounded-lg text-white"
                            : "text-slate-400"
                        }`}
                      >
                        {subItem.icon}
                        <p className="hidden md:block">{subItem.name}</p>
                      </li>
                    </button>
                  ))}
                </ul>
              )}
            </Fragment>
          ))}
        </ul>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
