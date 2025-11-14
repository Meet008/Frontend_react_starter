import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Admin", path: "/admin" },
];

export default function Sidebar({ open }) {
  const navigate = useNavigate();

  return (
    <aside
      className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-white border-r shadow-lg
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <ul className="p-4 space-y-2 text-gray-700">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className="cursor-pointer p-2 rounded hover:bg-gray-100"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
