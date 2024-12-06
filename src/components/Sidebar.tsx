import {
  Settings,
  Bell,
  User,
  TableOfContents,
  House,
  ClipboardPenLine,
  CloudUpload,
} from "lucide-react";
import "../style/Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: TableOfContents },
    { icon: House },
    { icon: Bell },
    { icon: ClipboardPenLine },
    { icon: CloudUpload },
    { icon: Settings },
  ];

  return (
    <div className="sidebar">
      <div className="top-icons">
        {menuItems.map((item, idx) => (
          <div key={idx} className="menu-item">
            <item.icon size={24} />
          </div>
        ))}
      </div>

      {/* User icon at the bottom */}
      <div className="bottom-icon">
        <div className="menu-item">
          <User size={24} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
