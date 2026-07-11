import useChatStore from "../../store/chatStore";
import MessageBubble from "./MessageBubble";

function ChatList() {
  const { messages } = useChatStore();

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      {messages.length === 0 ? (
        <p className="text-center text-zinc-500">
          Start a conversation...
        </p>
      ) : (
        messages.map((msg, index) => (
          <MessageBubble
            key={index}
            role={msg.role}
            content={msg.content}
          />
        ))
      )}
    </div>
  );
}

export default ChatList;