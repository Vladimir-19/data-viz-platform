import {
  Settings,
  Bell,
  User,
  TableOfContents,
  House,
  ClipboardPenLine,
  CloudUpload,
  LogOut,
} from "lucide-react";
import "../style/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const menuItems = [
    { icon: TableOfContents },
    { icon: House },
    { icon: Bell },
    { icon: ClipboardPenLine },
    { icon: CloudUpload },
    { icon: Settings },
    { icon: LogOut, onClick: true },
  ];
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="sidebar">
      <div className="top-icons">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="menu-item"
            onClick={item.onClick ? handleLogout : undefined} // Attached `handleLogout` for LogOut icon
          >
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
