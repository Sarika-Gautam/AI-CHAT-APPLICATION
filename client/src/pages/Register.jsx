import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await registerUser(formData);
      toast.success("Registration Successful");
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF8F0]">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 rounded-2xl shadow-md shadow-orange-100 bg-white border border-[#F3DFC9]"
      >
        <h1 className="text-3xl font-bold mb-6 text-[#FF9A6C]">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-[#F3DFC9] p-3 w-full mb-4 rounded-lg bg-[#FFF8F0] text-[#5A4636] placeholder-[#8C7A6B] outline-none focus:border-[#FFB88C]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-[#F3DFC9] p-3 w-full mb-4 rounded-lg bg-[#FFF8F0] text-[#5A4636] placeholder-[#8C7A6B] outline-none focus:border-[#FFB88C]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-[#F3DFC9] p-3 w-full mb-4 rounded-lg bg-[#FFF8F0] text-[#5A4636] placeholder-[#8C7A6B] outline-none focus:border-[#FFB88C]"
        />

        <button
          disabled={loading}
          className="bg-[#FFB88C] hover:bg-[#FF9A6C] disabled:opacity-50 text-white w-full p-3 rounded-xl font-semibold transition"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="mt-4 text-[#8C7A6B]">
          Already have an account?
          <Link
            to="/login"
            className="text-[#FF9A6C] ml-2 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;