import {
	CreatePizzaRequest, 
	CreatePizzaResponse, 
	GetPizzaRequest, 
	GetPizzaResponse, 
	IndexPizzaRequest, 
	IndexPizzaResponse 
} from './endpoint-types'
const jsf = require('json-schema-faker')
jsf.extend('faker', function() {
  return require('faker')
})

/************************ -- CreatePizza -- *****************************/


export async function createPizzaRequestDataStub(): Promise<CreatePizzaRequest['data']> {
  return jsf.resolve({'type':'object','properties':{'type':{'type':'number'},'size':{'type':'number'}},'additionalProperties':false,'required':['type','size'],'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}


export async function createPizzaResponseStub(): Promise<CreatePizzaResponse> {
  return jsf.resolve({'allOf':[{'$ref':'#/structures/pizza'}],'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}

/************************ -- GetPizza -- *****************************/


export async function getPizzaRequestDataStub(): Promise<GetPizzaRequest['data']> {
  return jsf.resolve({'type':'object','properties':{'pizzaId':{'$ref':'#/validators/uuid'}},'additionalProperties':false,'required':['pizzaId'],'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}


export async function getPizzaResponseStub(): Promise<GetPizzaResponse> {
  return jsf.resolve({'allOf':[{'$ref':'#/structures/pizza'}],'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}

/************************ -- IndexPizza -- *****************************/


export async function indexPizzaRequestDataStub(): Promise<IndexPizzaRequest['data']> {
  return jsf.resolve({'type':'object','properties':{},'additionalProperties':false,'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}


export async function indexPizzaResponseStub(): Promise<IndexPizzaResponse> {
  return jsf.resolve({'type':'array','items':{'$ref':'#/structures/pizza'},'validators':{'address':{'type':'object','properties':{'street_address':{'type':'string'},'city':{'type':'string'},'state':{'type':'string'}},'required':['street_address','city','state']},'uuid':{'type':'string','format':'uuid','faker':'random.uuid'},'email':{'type':'string','format':'email','faker':'internet.email'},'password':{'type':'string','pattern':'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})','faker':'internet.password'},'sku':{'type':'string','pattern':'/^[a-z0-9]{10,20}$/i'}},'structures':{'pizza':{'type':'object','properties':{'id':{'$ref':'#/validators/uuid'},'type':{'type':'string'},'size':{'type':'integer','minimum':8,'maximum':16},'price':{'type':'number'}},'additionalProperties':false,'required':['id','type','size','price']}}})
}