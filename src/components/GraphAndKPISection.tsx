import { Button } from "@/components/ui/button";
import "../style/GraphAndKPISection.css";
import { CircleHelp } from "lucide-react";
import Graph from "./Graph";

const GraphAndKPISection = () => {
  return (
    <div className="graph-kpi-container">
      {/* left */}
      <div className="graph-section">
        <div className="graph-header">
          <h3>Graphs</h3>
        </div>
        <div className="graph-placeholder">
          <Graph />
        </div>
      </div>

      {/* Right */}
      <div className="kpi-section">
        <div className="kpi-header">
          <h3>Key Performance Indicators</h3>
          <Button className="variables-button">Variables +</Button>
        </div>
        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>
              Infrastructure Units
              <CircleHelp size={12} style={{ marginInline: "10%" }} />
            </h3>
            <p>This describes variable two and what the shown data means.</p>
            <span>€421.07</span>
          </div>
          <div className="kpi-card">
            <h3>
              Charging Growth
              <CircleHelp size={12} style={{ marginInline: "10%" }} />
            </h3>
            <p>This describes variable two and what the shown data means.</p>
            <span>33.07</span>
          </div>
          <div className="kpi-card">
            <h3>
              Localization Change
              <CircleHelp size={12} style={{ marginInline: "10%" }} />
            </h3>
            <p>This describes variable two and what the shown data means.</p>
            <span>21.9%</span>
          </div>
          <div className="kpi-card">
            <h3>
              Fleet Growth
              <CircleHelp size={12} style={{ marginInline: "10%" }} />
            </h3>
            <p>This describes variable two and what the shown data means.</p>
            <span>7.03%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphAndKPISection;
