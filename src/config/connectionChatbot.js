import pkg from "whatsapp-web.js";

import qrcode from "qrcode-terminal";

import { receiveMessage } from "../services/chatbot.js";

export async function connectionChat() {
  const { Client } = pkg;

  const client = new Client({
    puppeteer: {
      args: ["--no-sandbox"],
    },
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client is ready!");
  });

  receiveMessage(client);

  client.initialize();

  return true;
}
