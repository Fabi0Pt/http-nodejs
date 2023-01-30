import express from "express";
import { connectionChat } from "./src/config/connectionChatbot.js";
const app = express();

connectionChat();

export default app;
