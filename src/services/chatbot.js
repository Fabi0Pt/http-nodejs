import controllerMessage from "../interface/index.js";

export const receiveMessage = (client) => {
  client.on("message", async (message) => {
    const test = await controllerMessage(message, client);
    client.sendMessage(message.from, test);
  });
};
