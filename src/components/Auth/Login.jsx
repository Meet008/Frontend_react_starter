import React, { useState } from "react";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-md border">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

      {error && (
        <p className="text-red-600 mb-3 text-center text-sm font-medium">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      {/* links */}
      <div className="flex justify-between mt-4 text-sm">
        <button
          onClick={() => navigate("/forgot-password")}
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="text-blue-600 hover:underline"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
