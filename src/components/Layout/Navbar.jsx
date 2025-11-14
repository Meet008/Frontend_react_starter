import React from "react";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full h-16 bg-blue-600 text-white flex items-center px-4 shadow z-50">
      {/* Sidebar toggle button */}
      <button onClick={toggleSidebar} className="mr-4">
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* App title */}
      <h1 className="text-xl font-semibold">My App</h1>

      {/* Right section */}
      <div className="ml-auto flex items-center space-x-4">
        <span className="font-medium">{user?.name}</span>

        <button
          onClick={handleLogout}
          className="px-4 py-1 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
