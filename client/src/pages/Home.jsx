import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInput from "../components/chat/ChatInput";

function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <ChatContainer />
        <ChatInput />
      </div>
    </div>
  );
}

export default Home;