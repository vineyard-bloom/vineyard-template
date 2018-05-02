import {
	CreatePizzaRequest, 
	GetPizzaRequest, 
	CreatePizzaResponse, 
	GetPizzaResponse 
} from '/Users/aarongreenspan/IbN/VINEYARD/vineyard-server-template/src/endpoints/generated/endpoint-types'

const jsf = require('json-schema-faker');
jsf.extend('faker', function() {
  return require('faker');
});

/************************ -- Create Pizza -- *****************************/

export async function createPizzaRequestStub(): Promise<CreatePizzaRequest> {
  return jsf.resolve({"type":"object","properties":{"type":{"type":"number"},"size":{"type":"number"}},"additionalProperties":false,"required":["type","size"],"validators":{"address":{"type":"object","properties":{"street_address":{"type":"string"},"city":{"type":"string"},"state":{"type":"string"}},"required":["street_address","city","state"]},"uuid":{"type":"string","format":"uuid","faker":"random.uuid"},"email":{"type":"string","format":"email","faker":"internet.email"},"password":{"type":"string","pattern":"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})","faker":"internet.password"},"sku":{"type":"string","pattern":"/^[a-z0-9]{10,20}$/i"}}})
}

export async function createPizzaResponseStub(): Promise<CreatePizzaResponse> {
  return jsf.resolve({"type":"object","properties":{"id":{"type":"string"},"type":{"type":"string"},"size":{"type":"number"},"price":{"type":"number"}},"additionalProperties":false,"required":["id","type","size","price"],"validators":{"address":{"type":"object","properties":{"street_address":{"type":"string"},"city":{"type":"string"},"state":{"type":"string"}},"required":["street_address","city","state"]},"uuid":{"type":"string","format":"uuid","faker":"random.uuid"},"email":{"type":"string","format":"email","faker":"internet.email"},"password":{"type":"string","pattern":"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})","faker":"internet.password"},"sku":{"type":"string","pattern":"/^[a-z0-9]{10,20}$/i"}}})
}

/************************ -- Get Pizza -- *****************************/

export async function getPizzaRequestStub(): Promise<GetPizzaRequest> {
  return jsf.resolve({"type":"object","properties":{"pizzaId":{"type":"string"}},"additionalProperties":false,"required":["pizzaId"],"validators":{"address":{"type":"object","properties":{"street_address":{"type":"string"},"city":{"type":"string"},"state":{"type":"string"}},"required":["street_address","city","state"]},"uuid":{"type":"string","format":"uuid","faker":"random.uuid"},"email":{"type":"string","format":"email","faker":"internet.email"},"password":{"type":"string","pattern":"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})","faker":"internet.password"},"sku":{"type":"string","pattern":"/^[a-z0-9]{10,20}$/i"}}})
}

export async function getPizzaResponseStub(): Promise<GetPizzaResponse> {
  return jsf.resolve({"type":"object","properties":{"id":{"type":"string"},"type":{"type":"string"},"size":{"type":"number"},"price":{"type":"number"}},"additionalProperties":false,"required":["id","type","size","price"],"validators":{"address":{"type":"object","properties":{"street_address":{"type":"string"},"city":{"type":"string"},"state":{"type":"string"}},"required":["street_address","city","state"]},"uuid":{"type":"string","format":"uuid","faker":"random.uuid"},"email":{"type":"string","format":"email","faker":"internet.email"},"password":{"type":"string","pattern":"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})","faker":"internet.password"},"sku":{"type":"string","pattern":"/^[a-z0-9]{10,20}$/i"}}})
}