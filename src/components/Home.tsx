import React, { useState } from "react";
import { Zap, RotateCw, Upload } from "lucide-react";
import "../style/Home.css";
import { Button } from "@/components/ui/button";
import { ChevronUp, MoreHorizontal, Sparkles } from "lucide-react";
import GraphAndKPISection from "./GraphAndKPISection";
import EditSidebar from "./EditSidebar";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isContainerVisible, setContainerVisible] = useState(false);

  const toggleContainer = () => {
    setContainerVisible(!isContainerVisible);
  };

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-left">
          <Zap size={24} className="icon" />
          <h1 className="title">Charging Station</h1>
        </div>

        <div className="header-right">
          <Button className="header-button">
            <RotateCw size={18} className="icon" />
          </Button>
          <Button
            className="header-button edit-button"
            onClick={() => setSidebarOpen(true)}
          >
            Edit Variables
          </Button>
          <Button className="header-button">
            <Upload size={18} className="icon" />
          </Button>
        </div>
      </div>
      <EditSidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="child-container">
        <div className="header-left">
          <Sparkles className="stars" size={18} />
          <h2 style={{ color: "#a3e635" }}>Best Scenario Results</h2>
        </div>

        <div className="header-right">
          <ChevronUp className="chevron-up" size={20} />
        </div>
      </div>
      <div className="item-container">
        <div className="header-left">
          The best found configuration based on profit is characterized by 11
          zones (max) with charging stations and 48 total number of poles.
        </div>
        <div className="header-right">
          <MoreHorizontal style={{ color: "#a3e635" }} size={20} />
        </div>
      </div>
      <div className="item-container">
        <div className="header-left">
          The best found configuration based on satisfied demand is
          characterized by 11 zones (max) with charging stations and 48 total
          number of poles.
        </div>
        <div className="header-right">
          <MoreHorizontal style={{ color: "#a3e635" }} size={20} />
        </div>
      </div>
      <GraphAndKPISection />
      <div className="relative w-full h-screen">
        {/* Button to toggle the right container */}
        <button
          className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={toggleContainer}
        >
          Toggle Right Container
        </button>

        {/* Blurred Background and Right Container */}
        {isContainerVisible && (
          <div className="fixed inset-0 z-50 flex">
            {/* Blurred Background */}
            <div className="flex-1 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Right Container */}
            <div className="w-1/3 bg-[#1a1a1a] text-white h-full p-6 overflow-y-auto">
              <h1 className="text-xl font-semibold mb-4">Right Container</h1>
              <p>
                This is the right-side container. It takes 1/3 of the page width
                and has a dark background.
              </p>
              <p>
                You can add more content here, and the rest of the page will
                remain blurred while this container is visible.
              </p>
              {/* Close Button */}
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={toggleContainer}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
