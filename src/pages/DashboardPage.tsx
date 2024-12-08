import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import Home from "@/components/Home";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100">
          <div className="fixed top-0 left-0 w-full z-50">
            <TopNav />
          </div>
          <div className="pt-14 px-6">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
