import React, { useState, useRef } from "react";
import "../style/Editbar.css";
import { ChevronUp, Sparkles, RotateCw, Info } from "lucide-react";

interface EditSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditSidebar: React.FC<EditSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [selectedOvals, setSelectedOvals] = useState<string[]>([]);
  const [showCo2Tooltip, setShowCo2Tooltip] = useState<boolean>(false);
  const [showCo2Immediate, setShowCo2Immediate] = useState<boolean>(false);

  const co2HoverTimeout = useRef<number | undefined>(undefined);

  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(selectedButton === buttonId ? null : buttonId);
  };

  const handleOvalClick = (ovalName: string) => {
    if (selectedOvals.includes(ovalName)) {
      setSelectedOvals(selectedOvals.filter((item) => item !== ovalName));
    } else {
      setSelectedOvals([...selectedOvals, ovalName]);
    }
  };

  const handleCo2MouseEnter = () => {
    setShowCo2Immediate(true);
    co2HoverTimeout.current = window.setTimeout(() => {
      setShowCo2Tooltip(true);
    }, 1500);
  };

  const handleCo2MouseLeave = () => {
    setShowCo2Immediate(false);
    if (co2HoverTimeout.current) {
      clearTimeout(co2HoverTimeout.current);
    }
    setShowCo2Tooltip(false);
  };

  const isOvalSelected = (ovalName: string) => selectedOvals.includes(ovalName);

  return (
    <div className="overlay">
      <div className="editbar">
        <div className="slim-container ">
          <h2>Edit Variable</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              fontSize: "18px",
              border: "none",
              background: "transparent",
              padding: 0,
            }}
          >
            ✖
          </button>
        </div>
        <div className="slim-container">
          <input
            type="text"
            placeholder="Search"
            className="header-button"
            style={{ width: "60%", margin: "1px" }}
          />
          <button
            className={`active-button ${
              selectedButton === 1 ? "selected" : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <Sparkles style={{ marginRight: "9px" }} size={18} />
            Autofill
          </button>
          <button
            className={`active-button ${
              selectedButton === 2 ? "selected" : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <RotateCw
              style={{ marginRight: "9px" }}
              size={18}
              className="icon"
            />
            Return
          </button>
        </div>
        <div className="result-placeholder">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Variable Category 1
          </h3>
          <div className="flex flex-wrap gap-18">
            <button
              className={`oval-button ${
                isOvalSelected("Carbon 1") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Carbon 1")}
            >
              Carbon 1
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Carbon 1") ? "✔" : "+"}
              </span>
            </button>
            <button
              className={`oval-button ${
                isOvalSelected("Co2 Distribution") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Co2 Distribution")}
              onMouseEnter={handleCo2MouseEnter}
              onMouseLeave={handleCo2MouseLeave}
            >
              Co2 Distribution
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Co2 Distribution") ? "✔" : "+"}
              </span>
            </button>
            <button
              className={`oval-button ${
                isOvalSelected("Fleet Sizing") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Fleet Sizing")}
            >
              Fleet Sizing
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Fleet Sizing") ? "✔" : "+"}
              </span>
            </button>
          </div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Variable Category 2
          </h3>
          <div className="flex flex-wrap gap-18">
            <div className="flex flex-wrap gap-18">
              <button
                className={`oval-button ${
                  isOvalSelected("Parking Rate") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Parking Rate")}
              >
                Parking Rate
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Parking Rate") ? "✔" : "+"}
                </span>
              </button>
              <button
                className={`oval-button ${
                  isOvalSelected("Border Rate") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Border Rate")}
              >
                Border Rate
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Border Rate") ? "✔" : "+"}
                </span>
              </button>
              <button
                className={`oval-button ${
                  isOvalSelected("Request rate") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Request rate")}
              >
                Request rate
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Request rate") ? "✔" : "+"}
                </span>
              </button>
              <button
                className={`oval-button ${
                  isOvalSelected("Variable 1 - Cat 2 #1") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Variable 1 - Cat 2 #1")}
              >
                Variable 1
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Variable 1 - Cat 2 #1") ? "✔" : "+"}
                </span>
              </button>
              <button
                className={`oval-button ${
                  isOvalSelected("Variable 1 - Cat 2 #2") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Variable 1 - Cat 2 #2")}
              >
                Variable 1
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Variable 1 - Cat 2 #2") ? "✔" : "+"}
                </span>
              </button>
              <button
                className={`oval-button ${
                  isOvalSelected("Variable 1 - Cat 2 #3") ? "selected" : ""
                }`}
                onClick={() => handleOvalClick("Variable 1 - Cat 2 #3")}
              >
                Variable 1
                <Sparkles style={{ paddingLeft: "9px" }} size={10} />
                <span style={{ marginLeft: "5px" }}>
                  {isOvalSelected("Variable 1 - Cat 2 #3") ? "✔" : "+"}
                </span>
              </button>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Variable Category 3
          </h3>
          <div className="flex flex-wrap gap-18">
            <button
              className={`oval-button ${
                isOvalSelected("Variable 1 - Cat 3 #1") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Variable 1 - Cat 3 #1")}
            >
              Variable 1
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Variable 1 - Cat 3 #1") ? "✔" : "+"}
              </span>
            </button>
            <button
              className={`oval-button ${
                isOvalSelected("Variable 1 - Cat 3 #2") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Variable 1 - Cat 3 #2")}
            >
              Variable 1
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Variable 1 - Cat 3 #2") ? "✔" : "+"}
              </span>
            </button>
            <button
              className={`oval-button ${
                isOvalSelected("Variable 1 - Cat 3 #3") ? "selected" : ""
              }`}
              onClick={() => handleOvalClick("Variable 1 - Cat 3 #3")}
            >
              Variable 1
              <Sparkles style={{ paddingLeft: "9px" }} size={10} />
              <span style={{ marginLeft: "5px" }}>
                {isOvalSelected("Variable 1 - Cat 3 #3") ? "✔" : "+"}
              </span>
            </button>
          </div>
        </div>

        {showCo2Immediate && (
          <div className="conditional-placeholder">
            {!showCo2Tooltip ? (
              <div className="spinner">Loading...</div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">
                  Co2 Distribution
                  <Info style={{ paddingLeft: "9px" }} size={15} />
                </h3>
                <p>
                  But what truly sets Switch apart is its versatility. It can be
                  used as a scooter, a bike, or even a skateboard, making it
                  suitable for people of all ages. Whether you're a student, a
                  professional, or a senior citizen, Switch adapts to your needs
                  and lifestyle.
                </p>
              </div>
            )}
          </div>
        )}
        <div className="dropdown-header-container">
          <h3 className="header-left" style={{ margin: "3px" }}>
            Promary Variables
          </h3>
          <div className="header-right">
            <ChevronUp className="chevron-up" size={20} />
          </div>
        </div>
        <div className="dropdown-header-container">
          <h3 className="header-left" style={{ margin: "3px" }}>
            Secondary Variables
          </h3>
          <div className="header-right">
            <ChevronUp className="chevron-up" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSidebar;
