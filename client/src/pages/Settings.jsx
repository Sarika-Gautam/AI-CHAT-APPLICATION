function Settings() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md shadow-orange-100 border border-[#F3DFC9] w-full max-w-md">
        <h2 className="text-xl font-bold text-[#FF9A6C] mb-6">Settings</h2>

        <div className="flex items-center justify-between py-3 border-b border-[#F3DFC9]">
          <span className="text-[#5A4636]">Theme</span>
          <span className="text-[#8C7A6B] text-sm">Peach & Cream (default)</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-[#F3DFC9]">
          <span className="text-[#5A4636]">AI Model</span>
          <span className="text-[#8C7A6B] text-sm">Gemini 2.5 Flash</span>
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-[#5A4636]">Notifications</span>
          <span className="text-[#8C7A6B] text-sm">Enabled</span>
        </div>
      </div>
    </div>
  );
}

export default Settings;