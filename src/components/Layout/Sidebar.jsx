import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Model from "../UI/Model";
import Dialog from "../UI/Dialog";
export default function Sidebar({ open, toggleSidebar }) {
  const navigate = useNavigate();
  const menuItems = [
    { text: "Dashboard", path: "/" },
    { text: "Profile", path: "/profile" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-blue-600 text-white shadow-lg z-30 transform transition-transform duration-300
          ${
            open ? "translate-x-0" : "-translate-x-60"
          } md:translate-x-0 md:relative`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <span className="font-bold text-lg">My App</span>
          <button
            className="md:hidden p-1 rounded hover:bg-blue-500"
            onClick={toggleSidebar}
          >
            {/* Close icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.text}
              className="w-full text-left px-4 py-2 hover:bg-blue-500"
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </button>
          ))}
          <button
            className="w-full text-left px-4 py-2 hover:bg-blue-500"
            onClick={() => setShowModal(true)}
          >
            Modal
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-blue-500"
            onClick={() => setShowDialog(true)}
          >
            Dialog
          </button>
        </nav>
      </div>
      {showModal && (
        <Model open={true} onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>This is a reusable modal using ONLY Tailwind.</p>

          <button
            onClick={() => setShowModal(false)}
            className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </Model>
      )}
      {showDialog && (
        <Dialog
          open={true}
          title="Delete Account?"
          message="This action cannot be undone."
          onConfirm={() => {
            setShowDialog(false);
            alert("Account deleted");
          }}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </>
  );
}
