import mongoose from "mongoose";
import config from "./config/environment-variables";

export async function connect(){
  try {
    await mongoose.connect(`mongodb+srv://${config.USER_DATABASE}:${config.SECRET_KEY_DATABASE}@hero-tickets-database.vc3eoxd.mongodb.net/hero-tickets`);
    console.log('Database connected with successfully!');
    
  } catch (error) {
    console.log("file: database/index.ts - connect error:", error);    
  }
}