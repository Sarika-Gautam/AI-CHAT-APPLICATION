import { MessageSquarePlus, Trash2 } from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { createChat, getSingleChat, deleteChat } from "../../services/chatService";

function Sidebar() {
  const {
    chats,
    setChats,
    currentChat,
    setCurrentChat,
    loadChats,
  } = useChat();

  const handleNewChat = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await createChat(token);

      setChats((prev) => [res.data.chat, ...prev]);
      setCurrentChat(res.data.chat);

      await loadChats();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChat = async (chatId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await getSingleChat(token, chatId);
      setCurrentChat(res.data.chat);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteChat = async (e, chatId) => {
    e.stopPropagation(); // chat select trigger na ho delete click pe

    const confirmDelete = window.confirm("Delete this chat?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await deleteChat(token, chatId);

      setChats((prev) => prev.filter((chat) => chat._id !== chatId));

      if (currentChat?._id === chatId) {
        setCurrentChat(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="w-72 bg-[#FFE9D6] border-r border-[#F3DFC9] flex flex-col">
      <div className="p-5">
        <h1 className="text-3xl font-bold text-[#FF9A6C] font-sans">
          Nova AI
        </h1>

        <button
          onClick={handleNewChat}
          className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFB88C] hover:bg-[#FF9A6C] text-white shadow-md shadow-orange-100 transition"
        >
          <MessageSquarePlus size={18} />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {chats.length === 0 ? (
          <p className="text-[#8C7A6B] mt-4">
            No chats yet
          </p>
        ) : (
          chats.map((chat) => (
            <div
              key={chat._id}
              onClick={() => handleSelectChat(chat._id)}
              className={`group p-3 rounded-xl cursor-pointer mb-2 transition text-[#5A4636] flex items-center justify-between ${
                currentChat?._id === chat._id
                  ? "bg-[#FFD9BB]"
                  : "hover:bg-[#FFF3E6]"
              }`}
            >
              <span className="truncate">{chat.title}</span>

              <Trash2
                size={16}
                onClick={(e) => handleDeleteChat(e, chat._id)}
                className="opacity-0 group-hover:opacity-100 text-[#8C7A6B] hover:text-red-500 transition shrink-0 ml-2"
              />
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
