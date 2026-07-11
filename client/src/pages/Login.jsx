import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      // Token is already stored in AuthContext.
      // If your AuthContext stores it, this line can be removed.
      if (res?.token) {
        localStorage.setItem("token", res.token);
      }

      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl w-[400px] shadow-md shadow-orange-100 border border-[#F3DFC9]"
      >
        <h1 className="text-4xl font-bold text-[#FF9A6C] mb-2">
          Nova AI
        </h1>

        <p className="text-[#8C7A6B] mb-8">
          Welcome Back 👋
        </p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#FFF8F0] border border-[#F3DFC9] mb-4 text-[#5A4636] placeholder-[#8C7A6B] outline-none focus:border-[#FFB88C]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#FFF8F0] border border-[#F3DFC9] mb-6 text-[#5A4636] placeholder-[#8C7A6B] outline-none focus:border-[#FFB88C]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FFB88C] hover:bg-[#FF9A6C] disabled:opacity-50 py-3 rounded-xl text-white font-semibold transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="text-[#8C7A6B] mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#FF9A6C] font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
