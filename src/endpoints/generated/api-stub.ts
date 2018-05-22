import {
	createPizzaResponseStub, 
	getPizzaResponseStub, 
	indexPizzaResponseStub 
} from './endpoint-stubs'
import {
	ApiActions 
} from './api-contract'

export const apiStub: ApiActions = {
  createPizza: createPizzaResponseStub,
	getPizza: getPizzaResponseStub,
	indexPizza: indexPizzaResponseStub
}