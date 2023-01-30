import { storage } from "../storage.js";

export const stageThree = async (from, message, client) => {
  storage[from].address = message;
  storage[from].stage = 4;

  if (message === "*") {
    storage[from].stage = 0;
    return "Pedido *CANCELADO* com sucesso. \n Volte Sempre!";
  }

  let desserts = "";
  const itens = storage[from].itens;
  itens.map((item, index) => {
    if (index == itens.length - 1) {
      desserts += item.description + ".";
    } else {
      desserts += item.description + ", ";
    }
  });
  const total = storage[from].itens.length;

  await client.sendMessage(
    from,
    `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Produto: *${desserts}* \n🚚 Variações: *a confirmar*. \n📍 Cor: *${message}* \n💰 Valor total: *${
      total * 6
    },00 reais*. \n⏳ Tempo de confirmação: *50 minutos*. \n\n` +
      "🔊 ```Assim que finalizar o pagamento nos retorne com o comprovante.```"
  );

  return "✅ *Prontinho, pedido feito!* \n\nAgora , vou te passar para um atendente para que ele verique o valor da *taxa de entrega*. \n\n⏳ *Aguarde um instante*.";
};
