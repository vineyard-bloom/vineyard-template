import {
	createPizzaResponseStub, 
	getPizzaResponseStub, 
	indexPizzaResponseStub 
} from './endpoint-stubs'
import {
	ApiContract 
} from './api-contract'

export const apiStub: ApiContract = {
  createPizza: createPizzaResponseStub,
	getPizza: getPizzaResponseStub,
	indexPizza: indexPizzaResponseStub
}