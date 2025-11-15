import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-6 animate-fade-in">
        {children}
      </div>
    </div>
  );
}
