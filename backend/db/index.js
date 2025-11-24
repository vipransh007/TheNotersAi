import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const connectInstance = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`MongoDB successfully Connnected 🚀✅`);
    } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
export default connectDb;