import { menu } from "../menu.js";
import { storage } from "../storage.js";

export const stageTwo = (from, message) => {
  const order =
    "\n-----------------------------------\n#️⃣ - ```Escolher o produto agora``` \n*️⃣ - ```Cancelar```";
  if (message === "*") {
    storage[from].stage = 0;
    storage[from].itens = [];

    return "🔴 Pedido *CANCELADO* com sucesso. \n\n ```Volte Sempre!```";
  } else if (message === "#") {
    storage[from].stage = 6;

    return (
      "Em qual cômodo você gostaria de colocar o tapete?.\n\n " +
      "1: Sala\n\n" +
      "2: Quarto\n\n" +
      "3: Cozinha\n\n" +
      "4: Banheiro\n\n" +
      "\n*️⃣ - ```Encerrar Chat```"
    );
  }

  return (
    `✅ *${menu[message].pergunta}*\n\n ${menu[message].resposta} \n\n` + order
  );
};
