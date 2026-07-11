import { create } from "zustand";
import api from "../services/api";

const useChatStore = create((set) => ({
  messages: [],
  loading: false,

  sendMessage: async (text) => {
    if (!text.trim()) return;

    set((state) => ({
      messages: [
        ...state.messages,
        {
          role: "user",
          content: text,
        },
      ],
      loading: true,
    }));

    try {
      const { data } = await api.post("/chat", {
        message: text,
      });

      set((state) => ({
        messages: [
          ...state.messages,
          {
            role: "assistant",
            content: data.reply,
          },
        ],
        loading: false,
      }));
    } catch (err) {
      console.log(err);

      set({
        loading: false,
      });
    }
  },
}));

export default useChatStore;
