import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar fatura do cartão",
        done: true,
      },
      {
        _id: 2,
        description: "Reunião com a equipe as 10:00",
        done: false,
      },
      {
        _id: 3,
        description: "Consulta médida na terça depois do almoço",
        done: false,
      },
    ],
  }),
});

export default rootReducers;
