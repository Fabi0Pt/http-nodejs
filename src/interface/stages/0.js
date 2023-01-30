import { storage } from "../storage.js";

export const initialStage = (from) => {
  storage[from].stage = 1;

  return "👋 Olá, como vai? \n\n🧒🏻\nEu sou a Anne, a *assistente virtual* da Soft Dream. \n*Posso te ajudar?* \n\n1: - ```Ajuda``` \n2: - ```Quem somos```\n0: - ```Falar com um atendente```";
};
