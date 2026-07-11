import Sidebar from "../components/layout/Sidebar";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInput from "../components/chat/ChatInput";

function Chat() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <ChatContainer />
        <ChatInput />
      </div>
    </div>
  );
}

export default Chat;