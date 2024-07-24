import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      icon: <RxDashboard size={17} className="mr-2 text-white" />,
      text: "Dashboard",
      path: "/",
    },
    {
      icon: <FaThList size={17} className="mr-2 text-white" />,
      text: "Tasks",
      path: "/table",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-[200px] h-screen bg-black z-10 shadow-md">
      <nav>
        <ul className="flex text-left flex-col px-2 mt-[70px] text-gray-800">
          {menuItems.map(({ icon, text, path }, index) => {
            return (
              <section key={index}>
                <Link
                  to={path}
                  className="flex text-left hover:bg-[#534f4f] px-2 py-1 rounded-md items-center my-2"
                >
                  <li key={index} className="cursor-pointer ">
                    {icon}
                  </li>
                  <span className="text-white text-sm">{text}</span>
                </Link>
              </section>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
