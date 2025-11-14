import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
  email: z.string().email("Invalid email"),
});

export default function ForgotPassword() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data) => {
    try {
      await axiosClient.post("/auth/forgot-password", { email: data.email });
      setSuccess("Password reset email sent!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset email");
      setSuccess("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-md border">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Forgot Password
      </h2>

      {/* Success */}
      {success && (
        <p className="text-green-600 mb-3 text-center font-medium">{success}</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-600 mb-3 text-center font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email field */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
