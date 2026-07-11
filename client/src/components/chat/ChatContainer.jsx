import { useChat } from "../../context/ChatContext";
import { useEffect, useRef } from "react";

function ChatContainer() {
  const { currentChat, loading } = useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat?.messages, loading]);

  return (
    <div className="flex-1 flex flex-col bg-[#FFF8F0] text-[#5A4636]">

      <div className="border-b border-[#F3DFC9] bg-[#FFEFE0] p-5">
        <h2 className="text-xl font-semibold text-[#FF9A6C]">
          {currentChat?.title || "Nova AI"}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {!currentChat ? (
          <div className="h-full flex items-center justify-center text-[#8C7A6B]">
            Start a new conversation 🚀
          </div>
        ) : currentChat.messages.length === 0 ? (
          <div className="text-center text-[#8C7A6B] mt-20">
            Ask Nova AI anything...
          </div>
        ) : (
          currentChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-sm ${
                msg.role === "user"
                  ? "ml-auto bg-[#FFD9BB] text-[#5A4636]"
                  : "bg-white text-[#5A4636] border border-[#F3DFC9]"
              }`}
            >
              {msg.content}
            </div>
          ))
        )}

        {loading && (
          <div className="max-w-[80%] px-5 py-3 rounded-2xl bg-white border border-[#F3DFC9] flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 bg-[#FFB88C] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-[#FFB88C] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-[#FFB88C] rounded-full animate-bounce"></span>
          </div>
        )}

        <div ref={bottomRef} />

      </div>

    </div>
  );
}

export default ChatContainer;
