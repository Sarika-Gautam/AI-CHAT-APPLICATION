import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },

    role: {
      type: String,
      enum: ["user", "assistant"],
    },

    content: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Message", messageSchema);