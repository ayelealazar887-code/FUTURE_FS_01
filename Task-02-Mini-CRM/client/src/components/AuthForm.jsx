import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const navigate = useNavigate()

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const endPoint = isRegister ? "/auth/register" : "/auth/login";

      const response = await api.post(endPoint, formData);

      console.log(response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/salesoverview")

      setMessage(response.data.message);

      if (isRegister) {
        setFormData({
          fullName: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full lg:w-1/2 bg-slate-50 min-h-screen p-8 sm:p-16">
      <div />

      <div className="max-w-md w-full mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            {isRegister ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {isRegister
              ? "Enter your details below to set up your account."
              : "Enter your credentials to access your CRM."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            {loading ? "Please wait..." : isRegister ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {message && (
          <p className="text-sm text-green-600 text-center">{message}</p>
        )}
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}
        <div className="text-center pt-2">
          <p className="text-sm text-slate-600">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
                setMessage("");
              }}
              className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              {isRegister ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>

      <div className="max-w-md w-full mx-auto pt-8 border-t border-slate-200/60">
        <p className="text-xs text-slate-400 text-center">
          © 2026 CORE CRM. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
