import { stages, getStage } from "./stages.js";

export default async function (message, client) {
  try {
    const currentStage = getStage({ from: message.from });

    const messageResponse = stages[currentStage].stage(
      message.from,
      message.body,
      client
    );
    console.log(messageResponse);
    return messageResponse;
  } catch (error) {
    console.log(error);
  }
}
