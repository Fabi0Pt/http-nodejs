import {
  initialStage,
  stageOne,
  stageTwo,
  stageThree,
  stageFour,
  finalStage,
  stageSix,
  stageSeven,
} from "./stages/index.js";

import { storage } from "./storage.js";

export const stages = [
  {
    descricao: "Welcome",
    stage: initialStage,
  },
  {
    descricao: "Menu",
    stage: stageOne,
  },
  {
    descricao: "Address",
    stage: stageTwo,
  },
  {
    descricao: "Bill",
    stage: stageThree,
  },
  {
    descricao: "New Order",
    stage: stageFour,
  },
  {
    descricao: "Assistent",
    stage: finalStage,
  },
  {
    descricao: "Size",
    stage: stageSix,
  },
  {
    descricao: "Link",
    stage: stageSeven,
  },
];

export function getStage({ from }) {
  if (storage[from]) {
    return storage[from].stage;
  } else {
    storage[from] = {
      stage: 0,
      itens: [],
      address: "",
    };

    return storage[from].stage;
  }
}
