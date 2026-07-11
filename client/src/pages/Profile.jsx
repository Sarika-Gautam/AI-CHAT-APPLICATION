import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await getCurrentUser(token);
        setUser(res.data.user || res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md shadow-orange-100 border border-[#F3DFC9] w-full max-w-sm text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#FFB88C] text-white flex items-center justify-center text-3xl font-bold mb-4">
          {user?.name ? user.name[0].toUpperCase() : "P"}
        </div>

        {loading ? (
          <p className="text-[#8C7A6B]">Loading profile...</p>
        ) : (
          <>
            <h2 className="text-xl font-bold text-[#5A4636]">
              {user?.name || "Nova AI User"}
            </h2>
            <p className="text-[#8C7A6B] mt-1">
              {user?.email || "No email found"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;