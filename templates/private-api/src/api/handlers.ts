import {Request} from 'vineyard-lawn'
import {Village} from "../village";
import {PizzaLogic} from "../logic/pizza-logic";

export async function handleGetPizza(request: Request, pizzaLogic:PizzaLogic) {
  return pizzaLogic.getPizza(request.params.id)
}

export async function handleCreatePizza(request: Request, pizzaLogic:PizzaLogic) {
  return pizzaLogic.createPizza(request.data)
}

export async function handleUpdatePizza(request: Request, pizzaLogic:PizzaLogic) {
  return pizzaLogic.updatePizza(request.params.id, request.data)
}

export async function handleDeletePizza(request: Request, pizzaLogic:PizzaLogic) {
  return pizzaLogic.deletePizza(request.params.id)
}