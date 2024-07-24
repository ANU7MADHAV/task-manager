import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import ButtonUsage from "../components/charts/Button";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-[50px] w-full bg-black text-white flex items-center justify-center"></header>
      <div className="flex flex-1">
        <aside className="w-[100px] bg-gray-800 text-white">
          <Navbar />
        </aside>
        <main className="flex-grow ml-[100px] p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
