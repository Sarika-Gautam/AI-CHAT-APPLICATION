import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { sendMessage } from "../../services/chatService";

function ChatInput() {
  const [text, setText] = useState("");
  const { currentChat, setCurrentChat, loading, setLoading, loadChats } = useChat();

  const handleSend = async () => {
    if (!text.trim() || !currentChat) return;

    const token = localStorage.getItem("token");
    const userMessage = text;
    setText("");

    setCurrentChat((prev) => ({
      ...prev,
      messages: [...prev.messages, { role: "user", content: userMessage }],
    }));

    try {
      setLoading(true);

      const res = await sendMessage(token, currentChat._id, userMessage);

      setCurrentChat(res.data.chat);

      await loadChats();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-[#F3DFC9] bg-[#FFF8F0] p-5 w-full">
      <div className="flex gap-3 w-full">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Ask Nova AI anything..."
          className="flex-1 min-w-0 bg-white rounded-xl px-5 py-4 outline-none border border-[#F3DFC9] text-[#5A4636] placeholder-[#8C7A6B] focus:border-[#FFB88C]"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="shrink-0 bg-[#FFB88C] hover:bg-[#FF9A6C] disabled:opacity-50 text-white rounded-xl px-6 flex items-center gap-2 transition"
        >
          <SendHorizontal size={18} />
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;


