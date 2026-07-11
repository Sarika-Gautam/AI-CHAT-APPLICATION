function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex mb-6 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-3xl px-5 py-4 rounded-2xl shadow-sm ${
          isUser
            ? "bg-[#FFD9BB] text-[#5A4636]"
            : "bg-white text-[#5A4636] border border-[#F3DFC9]"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default MessageBubble;

