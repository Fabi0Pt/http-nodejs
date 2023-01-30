import { storage } from "../storage.js";

export const stageFour = (from, message) => {
  const address = storage[from].address;
  const phone = from.split("@");

  storage[from].stage = 5;
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

  return `🔔 *NOVO PEDIDO* 🔔: \n\n📞 Cliente: +${
    phone[0]
  } \n🧁 Produto: *${desserts}* \n📍 Endereço: *${address}* \n🚚 Taxa de entrega: *a confirmar*. \n💰 Valor dos produtos: *${
    total * 6
  },00 reais*. \n⏳ Tempo de espera: *50 minutos*. \n🛑 Detalhes: *${message}*`;
};
