import {Method, Request, Server} from 'vineyard-lawn'
import {handleCreatePizza, handleDeletePizza, handleGetPizza, handleUpdatePizza} from "./handlers";
import {Village} from "../village";

export function initializeEndpoints(server: Server, village: Village) {
  const emptyPreprocessor = (request: Request) => Promise.resolve(request)

  const validators = server.compileApiSchema(require('./validation.json'))
  const pizzaLogic = village.logic.pizzaLogic

  server.createEndpoints(emptyPreprocessor, [
    {
      path: 'pizza/:id',
      method: Method.get,
      action: request => handleGetPizza(request, pizzaLogic),
      validator: validators.getPizza
    },

    {
      path: 'pizza',
      method: Method.post,
      action: request => handleCreatePizza(request, pizzaLogic),
      validator: validators.postPizza
    },

    {
      path: 'pizza/:id',
      method: Method.patch,
      action: request => handleUpdatePizza(request, pizzaLogic),
      validator: validators.updatePizza
    },

    {
      path: 'pizza/:id',
      method: Method.delete,
      action: request => handleDeletePizza(request, pizzaLogic),
      validator: validators.deletePizza
    }
  ])
}