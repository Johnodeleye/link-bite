import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Mongo Connection successfully established.");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error(error.message); // Log actual error
  }
};

export default connect;
