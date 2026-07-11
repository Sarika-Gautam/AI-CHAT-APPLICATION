import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
      family: 4
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("FULL ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;