import React, { useState } from "react";
import { Zap, RotateCw, Upload } from "lucide-react";
import "../style/Home.css";
import { Button } from "@/components/ui/button";
import { ChevronUp, MoreHorizontal, Sparkles } from "lucide-react";
import GraphAndKPISection from "./GraphAndKPISection";
import EditSidebar from "./EditSidebar";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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
    </div>
  );
};

export default Home;
