import { useState } from "react";
import { Bell, Settings, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="h-16 border-b border-[#F3DFC9] bg-[#FFEFE0] flex items-center justify-between px-8 relative">

      <div>
        <h2 className="text-xl font-bold text-[#FF9A6C]">Nova AI</h2>
        <p className="text-sm text-[#8C7A6B]">AI Powered Assistant</p>
      </div>

      <div className="flex items-center gap-5">

        {/* Notifications */}
        <div className="relative">
          <Bell
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowProfile(false);
            }}
            className="cursor-pointer text-[#5A4636] hover:text-[#FF9A6C] transition"
          />

          {showNotifications && (
            <div className="absolute right-0 top-10 w-64 bg-white border border-[#F3DFC9] rounded-xl shadow-md shadow-orange-100 p-4 z-50">
              <p className="text-sm font-semibold text-[#5A4636] mb-2">
                Notifications
              </p>
              <p className="text-sm text-[#8C7A6B]">
                No new notifications
              </p>
            </div>
          )}
        </div>

        {/* Settings */}
        <Settings
          onClick={() => navigate("/settings")}
          className="cursor-pointer text-[#5A4636] hover:text-[#FF9A6C] transition"
        />

        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotifications(false);
            }}
            className="w-10 h-10 rounded-full bg-[#FFB88C] text-white flex items-center justify-center font-semibold cursor-pointer"
          >
            P
          </div>

          {showProfile && (
            <div className="absolute right-0 top-12 w-48 bg-white border border-[#F3DFC9] rounded-xl shadow-md shadow-orange-100 py-2 z-50">
              <button
                onClick={() => {
                  navigate("/profile");
                  setShowProfile(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#5A4636] hover:bg-[#FFF3E6] transition"
              >
                <User size={16} />
                My Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-[#FFF3E6] transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}

export default Header;
