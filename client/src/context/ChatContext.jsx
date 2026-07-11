import { createContext, useContext, useState, useEffect } from "react";
import { getChats } from "../services/chatService";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadChats = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await getChats(token);
      setChats(res.data.chats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chats,
        setChats,
        currentChat,
        setCurrentChat,
        loadChats,
        loading,
        setLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
