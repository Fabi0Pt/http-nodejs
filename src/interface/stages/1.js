import { menu } from "../menu.js";
import { storage } from "../storage.js";

export const stageOne = (from, message) => {
  if (message === "1") {
    let msg = "🚨 Informações  🚨\n\n";

    Object.keys(menu).map((value) => {
      const element = menu[value];
      if (value === "1") {
        msg += `1: - _${element.pergunta}_ \n`;
      } else if (value === "2") {
        msg += `2: - _${element.pergunta}_ \n`;
      } else if (value === "3") {
        msg += `3: - _${element.pergunta}_ \n`;
      } else if (value === "4") {
        msg += `4: - _${element.pergunta}_ \n`;
      } else if (value === "5") {
        msg += `5: - _${element.pergunta}_ \n`;
      } else if (value === "6") {
        msg += `6: - _${element.pergunta}_ \n`;
      }
    });

    msg +=
      "\nPara visualizar nossos produtos, *acesse*: https://www.softdream.com.br/\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️*";
    storage[from].stage = 2;

    return msg;
  } else if (message === "2") {
    return (
      "\n\nSomos uma loja especializada em tapetes com mais de 20 anos de experiência no mercado. Oferecemos uma ampla variedade de opções de tamanho, cor e estilo para atender a todas as necessidades e preferências de nossos clientes. Temos uma equipe de especialistas altamente capacitada para ajudá-lo a encontrar o tapete perfeito para sua casa. Nós valorizamos a qualidade e a satisfação do cliente acima de tudo, e estamos sempre dispostos a ajudá-lo a encontrar o tapete ideal para sua casa." +
      "\n\n1: - ```Informações``` \n0: - ```Falar com um atendente```\n\n"
    );
  } else if (message === "0") {
    // client.markUnseenMessage(from);

    storage[from].stage = 5;

    return "🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.";
  }

  return "❌ *Digite uma opção válida, por favor.* \n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️";
};
