import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-gray-600 text-lg">Loading...</span>
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  // Optional role-based access
  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-red-600 text-lg">
          You do not have access to this page.
        </span>
      </div>
    );
  }

  return children;
}
